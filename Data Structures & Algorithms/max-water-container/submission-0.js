class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(nums) {
        let l = 0;
        let r = nums.length-1;
        let n = nums.length;
        let maxArea = 0;
        while(l<r){
            let h =  Math.min(nums[l],nums[r]);
            let area = h* (r-l);
            // console.log(h)
            maxArea=Math.max(area,maxArea);
            if(nums[l]>nums[r]){
                r--;
            }
            else if(nums[r]>nums[l]){
                l++;
            }
            else{
                r--;
            }
        }
        return maxArea;
    }
}
