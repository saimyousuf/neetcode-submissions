class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0;
        let map = new Map();
        let l =0;
        let r = 0;
        let ans=0;
        while(r<s.length){
            map.set(s[r],(map.get(s[r])||0 )+1);
            maxFreq=Math.max(maxFreq,map.get(s[r]));

            while(((r-l+1) - maxFreq)> k){
                map.set(s[l],map.get(s[l])-1);
                if(map.get(s[l])==0){
                    map.delete(s[l]);
                }
                l++;
            }

            ans = Math.max(r-l+1,ans);
            r++;
        }
        return ans;
    }
}
