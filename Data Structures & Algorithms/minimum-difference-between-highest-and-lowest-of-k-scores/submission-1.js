class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a,b)=>a-b);
        let l =0;
        let r =0;
        let diff =Infinity;
        while(r<nums.length){
            
            if(r-l+1 > k){
                l++;
            }

            if(r-l+1 === k ){
                diff = Math.min(diff,(nums[r]-nums[l]));
            }

            r++;

        }
        return diff;
    }
}
