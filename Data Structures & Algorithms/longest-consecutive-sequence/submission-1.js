class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],i);
        }
        let longest = 0;
        let i = 0;
        while(i<nums.length){
            if(!map.has(nums[i]-1)){
                let count=0;
                let curr = nums[i];
                while(count<map.size){
                    if(map.has(curr)){
                        count++;
                        curr++;
                        longest = Math.max(longest,count);
                    }
                    else{
                        break;
                    }
                }
            }
            i++;
        }
        return longest;
    }
}
