class Solution {
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);

        let l = 0;
        let minDiff = Infinity;

        for (let r = 0; r < nums.length; r++) {
            if (r - l + 1 === k) {
                minDiff = Math.min(minDiff, nums[r] - nums[l]);
                l++;
            }
        }

        return minDiff;
    }
}