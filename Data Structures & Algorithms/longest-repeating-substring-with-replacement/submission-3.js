class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0;
        let bucket = new Array(26).fill(0);
        let l =0;
        let r = 0;
        let ans=0;
        let a = 'A'.charCodeAt(0);
        while(r<s.length){
            bucket[s[r].charCodeAt(0)-a]++;

            maxFreq=Math.max(maxFreq,bucket[s.charCodeAt(r)-a]);

            if(((r-l+1) - maxFreq)> k){
                // map.set(s[l],map.get(s[l])-1);
                bucket[s[l].charCodeAt(0)-a]--;
                // if(map.get(s[l])==0){
                //     map.delete(s[l]);
                // }
                l++;
            }

            ans = Math.max(r-l+1,ans);
            r++;
        }
        return ans;
    }
}
