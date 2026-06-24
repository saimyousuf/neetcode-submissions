class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let mapa = new Array(26).fill(0);
        for(let i =0;i<s1.length;i++){
            mapa[s1[i].charCodeAt(0)-97]++;
        }
        
        let l =0;
        let r = 0;
        let mapb = new Array(26).fill(0);
        while(r<s2.length){
            mapb[s2[r].charCodeAt(0)-97]++;

            while(r-l+1>s1.length){
                mapb[s2[l].charCodeAt(0)-97]--;
                l++;
            }

            if(this.checkEqualMap(mapa,mapb)){return true;}
        r++;
        }


        return false;;
    }

    checkEqualMap(mapa,mapb){
        for(let i=0;i<mapa.length;i++){
            if(mapa[i]!==mapb[i]){return false;}
        }
        return true;
    }
}
