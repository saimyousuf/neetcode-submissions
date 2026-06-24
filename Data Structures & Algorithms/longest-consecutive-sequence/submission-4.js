class Solution {

    longestConsecutive(nums) {
    let set = new Set();
    
    for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
    }

    
    let maxCount =0;
    let count = 1;
    for(let i=0;i<nums.length;i++){
        while(set.has(nums[i]+count)){
            count++;
            maxCount = Math.max(maxCount,count);
        }
    count =1;
    }
    if(nums.length>0){
    return maxCount||1;}
    return 0;
    }

    
}
