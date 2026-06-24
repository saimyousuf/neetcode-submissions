class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(nums) {
        let profit = 0;
        let buy = nums[0];
        let sell = -Infinity;
        let i = 1;
        while(i<nums.length){
            if(nums[i]<buy){
                buy=nums[i];
                sell = -Infinity;
            }
            else if(nums[i]>sell){
                sell=nums[i];
                 profit=Math.max(profit,(sell-buy));
            }
           
            i++;
        }
        return profit;
    }
}
