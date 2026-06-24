class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        for(let i=0;i<strs.length;i++){
            prefix = this.checkPrefix(strs[i],prefix);
        }
        return prefix;
    }
    checkPrefix(str,prefix){
        let word = "";
        for(let i=0;i<str.length;i++){
            if(i<prefix.length && prefix[i]===str[i]){
                word+=prefix[i];
            }
            else{
                return word;
            }
        }
        return word;
    }
}
