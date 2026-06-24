class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = new Map();
        map.set(0,1);
        let count = 0;
        let prefixSum =0;
        for(let num of nums){
            prefixSum+=num;
            if(map.has(prefixSum-k)){
                count+= map.get(prefixSum-k);
            }
            map.set(prefixSum,(map.get(prefixSum)||0)+1);
        }
        return count;
    }
}
