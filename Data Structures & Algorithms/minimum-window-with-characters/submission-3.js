class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let bucket = new Array(128).fill(0);
        for(let i =0;i<t.length;i++){
            bucket[t.charCodeAt(i)]++;
        }
        let start =0;
        let end = Infinity;
        let l=0;
        let r = 0;
        let charFrequencyCount=0;

        while(r<s.length){
            if(bucket[s.charCodeAt(r)]>0){
                charFrequencyCount++;
            }
            bucket[s.charCodeAt(r)]--;

            while(charFrequencyCount==t.length){
                if( (r-l+1)<(end-start+1) ){
                    start=l;
                    end=r;
                }
                bucket[s.charCodeAt(l)]++;
                if(bucket[s.charCodeAt(l)]>0){
                    charFrequencyCount--;
                }
                l++;
            }
        r++;
        }


        return end===Infinity?"":s.slice(start,end+1);
    }
}
