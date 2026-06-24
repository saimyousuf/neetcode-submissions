class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let c1 = 0;
        let c2 = 0;
        let e1 = null;
        let e2 = null;

        for(let num of nums){
            if(num === e1){
                c1++;
            }
            else if(num === e2){
                c2++;
            }
            else if(c1 === 0){
                c1=1;
                e1=num;
            }
            else if(c2=== 0){
                c2=1;
                e2=num;
            }
            else{
                c1--;
                c2--;
            }
        }

       c1 = 0;
        c2 = 0;

        for (let num of nums) {
            if (num === e1) c1++;
            else if (num === e2) c2++;
        }

        let ans = [];

        if (c1 > nums.length / 3) ans.push(e1);
        if (c2 > nums.length / 3) ans.push(e2);

        return ans;
    }
}
