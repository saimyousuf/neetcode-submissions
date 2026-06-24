class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let count = 0;
        let l =0;
        let r =0;
        let min = Infinity;
        while(r<blocks.length){
            if(blocks[r] === "W"){
                count++;
            }
            
            if((r-l+1)>k){
                if(blocks[l]==="W"){
                    count--;
                }
                l++;
            }

            if(r-l+1 === k){
                min = Math.min(count,min);
            }
            r++;
        }
        return min;
    }
}
