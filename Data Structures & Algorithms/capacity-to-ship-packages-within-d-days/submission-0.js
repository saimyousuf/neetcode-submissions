class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((acc,curr)=>acc+curr,0);
        let ans = r;
        while(l<=r){
            let mid = Math.floor(l + (r - l) / 2);
            let daysUsed = 1;
            let currentWeight = 0;
            for(let w of weights){
                if(w+currentWeight > mid){
                    daysUsed++;
                    currentWeight = w;
                }
                else{
                    currentWeight+=w;
                }
            }
            if(daysUsed<=days){
                r=mid-1;
                ans = mid;
                }
            else{
                l=mid+1;
            } 

            }
            return ans;
    }
}