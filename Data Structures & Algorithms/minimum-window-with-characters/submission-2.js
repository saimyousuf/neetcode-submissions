class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let bucket = new Array(128).fill(0);
        for(let i=0;i<t.length;i++){
            bucket[t.charCodeAt(i)]++;
        }
        
        let l=0;
        let r=0;
        let haveCount = 0;
        let start = 0;
        let end = Infinity;
        
        while(r<s.length){
            let char = s.charCodeAt(r);
            if(bucket[char]>0){
                haveCount++;
            }
            bucket[char]--;

            while(haveCount === t.length){
                if((r-l+1)<(end-start+1)){
                    start = l;
                    end = r;
                }
                let leftChar = s.charCodeAt(l);
                bucket[leftChar]++;
                if(bucket[leftChar]>0){
                    haveCount--;
                }
                l++;                
            }
            r++;
        }



        return end===Infinity?"":s.slice(start,end+1);
    }
}
