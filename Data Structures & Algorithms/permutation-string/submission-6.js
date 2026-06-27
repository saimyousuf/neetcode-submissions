class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let mapA = new Array(26).fill(0);
        let mapB = new Array(26).fill(0);

        for(let i=0;i<s1.length;i++){
            mapA[s1.charCodeAt(i)-97]++;
        }

        let l =0;
        let r = 0;
        while(r<s2.length){
            mapB[s2.charCodeAt(r)-97]++;
            if(r-l+1 > s1.length){
                mapB[s2.charCodeAt(l)-97]--;
                l++;
            }
            if(this.checkContains(mapA,mapB)){
                return true;
            }
        r++;
        }
        return false;
    }
    checkContains(mapA,mapB){
        for(let i=0;i<mapA.length;i++){
            if(mapA[i]!==mapB[i]){
                return false;
            }
        }
        return true;
    }
}