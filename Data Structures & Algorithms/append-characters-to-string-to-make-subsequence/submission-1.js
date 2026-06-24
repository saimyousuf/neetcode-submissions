class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let l=0;
        let r=0;
        while(l< s.length && r<t.length){
            if(s[l]==t[r]){
                l++;
                r++;
            }
            else{
                l++;
            }
        }
        // if(r==t.length){return 0;}
        // if(r==0)return t.length;
        return (t.length)-r;
    }
}
