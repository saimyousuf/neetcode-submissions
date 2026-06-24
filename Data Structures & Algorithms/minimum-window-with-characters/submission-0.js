class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let l =0;
        let r =0;
        let bucket = new Array(128).fill(0);
        // let a = 'a'.charCodeAt(0);
        let start = 0;
        let end = Infinity;

        for(let i=0;i<t.length;i++){
            bucket[t.charCodeAt(i)]++;
        }
        let haveLetters = 0;
        console.log("bucket = ",bucket[t.charCodeAt(0)])

        while(r<s.length){
            let ch = s.charCodeAt(r);
            if(bucket[ch]>0){
                haveLetters++;
            }
            bucket[ch]--;
            
            while( haveLetters == t.length){
            console.log("hvl = ",haveLetters)
            if(r-l<(end-start)){
                start = l;
                end = r;
            }
            bucket[s.charCodeAt(l)]++;
            if(bucket[s.charCodeAt(l)  ] > 0){
                haveLetters--;
            }
            l++;

        }
        r++;
        }
            // console.log("end = ",end)
        return end===Infinity?"":s.slice(start,end+1);
    }
}
