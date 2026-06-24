class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(w1, w2) {
        let s = "";
        let l =0;
        let r =0;

        while(l<w1.length && r<w2.length){
            s+=w1[l];
            s+=w2[r];
            l++;
            r++;
        }
        while(l<w1.length){
            s+=w1[l];
            l++;
        }
        while(r<w2.length){
            s+=w2[r];
            r++;
        }
        return s;
    }
}
