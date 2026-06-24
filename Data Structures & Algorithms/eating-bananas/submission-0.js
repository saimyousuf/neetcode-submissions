class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l =1;
        let r =Math.max(...piles);
        let ans =r;
        while(l<=r){
            let m = Math.floor(l + (r-l)/2);
            let hours = 0;
            for(let pile of piles){
                hours+= Math.ceil(pile/m);
            }
            if(hours<=h){
                ans = m;
                r=m-1;
            }
            else {
                l=m+1;
            }

        }
        return ans;
    }
}
