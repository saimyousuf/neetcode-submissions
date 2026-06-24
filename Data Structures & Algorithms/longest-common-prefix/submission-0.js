class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length==0){return "";}
        let prefix = strs[0];
        let i = 0;
        while(i<strs.length){
            prefix = this.check(prefix,strs[i]);
            i++;
        }
        return prefix;
    }

    check(prefix,str){
        let word = "";
        for(let i=0;i<prefix.length;i++){
            if( i<prefix.length && i<str.length && prefix[i] === str[i]){
                word+=prefix[i];
            }
            else{
                break;
            }
        }
        return word;
    }
}
