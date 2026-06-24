class Solution {

    isAnagram(s, t) {
        if(s.length != t.length){return false;}
        let map = new Map();
        for(const i of s){
            map.set(i,(map.get(i)||0) +1);
        }
        for(const i of t){
            if(map.has(i)){
                map.set(i,map.get(i)-1);
            } 
            else{
                return false;
            }
            if(map.get(i)==0){
                map.delete(i);
            }
        }
        return true;
    }
}
