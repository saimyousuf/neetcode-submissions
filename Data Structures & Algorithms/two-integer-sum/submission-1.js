class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        map.set(nums[0],0);
        for(let i =1;i<nums.length;i++){
            let req = target-nums[i];
            if(map.has(req)){
                return [i,map.get(req)];
            } 
            map.set(nums[i],i);
        }
    return [0,1];
    }
}
