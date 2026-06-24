class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysWithKDistinct(nums, k) {
        return this.atMost(nums,k)-this.atMost(nums,k-1);
    }

    atMost(nums,k){
        let l =0;
        let r = 0;
        let count =0;
        let map = new Map();
        while(r<nums.length){
            map.set(nums[r],(map.get(nums[r])||0)+1);

            while(map.size > k){
                map.set(nums[l],map.get(nums[l])-1);
                if(map.get(nums[l])  === 0){map.delete(nums[l]);}
                l++;
            }
            
            count+= r-l+1;
            r++;
        }
        return count;
    }
}
