class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let bucket = new Array(26).fill(0);
        let a = 'a'.charCodeAt(0);
        for(let i=0;i<s1.length;i++ ){
            bucket[s1.charCodeAt(i)-a]++;
        }
        let l =0;
        let r = 0;
        while(r<s2.length){
            bucket[s2.charCodeAt(r)-a]--;

            if(r-l+1>s1.length){
                bucket[s2.charCodeAt(l)-a]++;
                l++;
            }

            if(r-l+1 === s1.length && allZero(bucket)){
                return true;
            }
            
            r++;
        }
    return false;
    }
}
function allZero(arr){
for (let v of arr) {
        if (v !== 0) return false;
    }
    return true;
}
