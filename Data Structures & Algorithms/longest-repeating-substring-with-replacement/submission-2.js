class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l =0;
        let r =0;
        let ans = 0;
        let a = 'A'.charCodeAt(0);
        let mf = 0;
        let bucket = new Array(27).fill(0);
        while(r<s.length){
            bucket[s.charCodeAt(r)-a]++;

            mf = Math.max(mf,bucket[s.charCodeAt(r)-a]);
            while( ((r-l+1)-mf) > k ){
                bucket[s.charCodeAt(l)-a]--;
                l++;
            }

            ans = Math.max(ans,(r-l+1));

        r++;

        }
    return ans;
    }
}
