class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map = new Map();
        for(let i of s1){
            map.set(i,(map.get(i)||0) + 1);
        }
        let i=0;
        let j =s1.length-1;
        while(j<s2.length){
            let s = s2.slice(i,(j+1));
            const copy = new Map(map);
            let ans = isPerm(copy,s);
            if(ans==true){return true;}
            i++;
            j++;
        }
    return false;
    }
}
function isPerm(map,s){
    console.log(map);
    console.log(s);
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])-1);
        }
        else{
            return false;
        }
        if(map.get(s[i]) == 0){
            map.delete(s[i]);
        }
    }
    return map.size === 0;
}
