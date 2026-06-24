class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let l = 0;
        let r=0;
        let max = 0;
        while(r<s.length){
            map.set(s[r],(map.get(s[r]) || 0) + 1 );
            console.log(map)
            while(map.get(s[r])>1 ){
                map.set(s[l],map.get(s[l])-1);
                if(map.get(s[l])<1){map.delete(s[l]);}
                l++;
            }
            max = Math.max(r-l+1,max);
        r++;
        }
        return max;
    }
}
