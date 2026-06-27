class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let l =0;
        let r = 0;
        let maxFrequency = 0;
        let ans = 0;
        while(r<s.length){
            map.set(s[r],(map.get(s[r])||0)+1);
            maxFrequency = Math.max(map.get(s[r]),maxFrequency);

            while((r-l+1)-maxFrequency > k){
                map.set(s[l],map.get(s[l])-1);
                l++;
            }
            ans = Math.max(ans,(r-l)+1);
            r++;
        }
        return ans;
    }
}
