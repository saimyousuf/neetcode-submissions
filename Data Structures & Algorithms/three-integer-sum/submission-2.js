class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);

        let target = 0;
        let ls = [];

        for(let i=0;i<nums.length-2;i++){
            if(i>0 && nums[i]==nums[i-1]){continue;}
            let j = i+1;
            let k=nums.length-1;

            while(j<k){
                let sum = nums[i]+nums[j]+nums[k];
                if(sum==target){
                    ls.push([nums[i],nums[j],nums[k]]);
                    // console.log(i,j,k);
                    j++;
                    k--;
            while(j<k && nums[j-1]==nums[j] ){
                j++;
            }
            
            while(k>j && nums[k]==nums[k+1]){
                k--;
            }
                }
                else if(sum<target){
                    j++;
                }
                else if(sum>target){
                    k--;
                }
            }
        }
        return ls;

    }
}
