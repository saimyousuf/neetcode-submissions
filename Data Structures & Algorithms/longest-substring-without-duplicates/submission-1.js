class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0;
        let j=0;
        let count = 0;
        let set = new Set();
        while(j<s.length){
            while(set.has(s[j])){
                set.delete(s[i]);
                i++;
            }
            set.add(s[j]);
            count = Math.max(j-i+1,count);
            j++;
        }
        return count;
    }
}
