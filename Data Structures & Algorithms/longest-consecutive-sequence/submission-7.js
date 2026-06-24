class Solution {

    longestConsecutive(nums) {
    let set = new Set();
    
    for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
    }
    let maxCount = 0;
if(nums.length>=1){maxCount=1;}
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i]-1)){
            let count =1;
            let current = nums[i];
            while(set.has(current)){
                count++;
                current++;
            }
            maxCount = Math.max(count,maxCount);
        }
    }
    return maxCount;

    }
}
