class Solution {
    isPalindrome(s) {
        let l =0;
        let r=s.length-1;
        while(l<r){
            while(l<r && !isAlphaNumeric(s.charAt(l)) ){
                l++;
            }
            while(r>l && !isAlphaNumeric(s.charAt(r)) ){
                r--;
            }
            if(s[l].toLowerCase()!==s[r].toLowerCase()){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    
}
function isAlphaNumeric(ch){
    let code = ch.charCodeAt(0);
    if((code>=48&&code<=57) || (code>=65&&code<=90)  || (code>=97&&code<=122)){
        return true;
    }
    return false;
}
