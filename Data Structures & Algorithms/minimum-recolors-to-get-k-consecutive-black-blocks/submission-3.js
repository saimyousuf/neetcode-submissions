class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let l =0;
        let r =0;
        let count =0;
        let best = Infinity;
        
        while(r<blocks.length){
                if(blocks[r]==="W"){
                    count++;
                }
            
            if(r-l+1 === k){
                best = Math.min(best,count);
                console.log(count)
                if(blocks[l]==='W'){
                    count--;
                }
                l++;
            }

    
            r++;
        }
        return best;
    }
}
