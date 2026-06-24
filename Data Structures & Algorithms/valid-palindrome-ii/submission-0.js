class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l =0;
        let r = s.length-1;
        while(l<=r){
            if(s[l]==s[r]){
                l++;
                r--;
            }
            else{
                let skipLeft = this.checkPalin(s,l+1,r);
                let skipRight = this.checkPalin(s,l,r-1);
                return skipLeft||skipRight;
            }
        }
        return true;
    }
    
    checkPalin(s,l,r){
        while(l<=r){
            if(s[l]===s[r]){
                l++;
                r--;
            }
            else{
                return false;
            }
        }
        return true;
    }
}
