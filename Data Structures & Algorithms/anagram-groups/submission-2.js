class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let s of strs){
            let word = s.split("").sort().join("");
            if(!map.has(word)){
                map.set(word,[]);
            }
            map.get(word).push(s);
        }
        return [...map.values()];
    }
}
