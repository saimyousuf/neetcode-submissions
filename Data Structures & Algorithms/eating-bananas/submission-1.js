class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = -Infinity;
        for(let i=0;i<piles.length;i++){
            max = Math.max(max,piles[i]);
        }
        let l =1;
        let r = max;
        let lastValid = -1;

        while(l<=r){
            let m = Math.floor(l + (r - l) / 2);
            
            let hours = 0;
            for(let i=0;i<piles.length;i++){
                hours+=Math.ceil(piles[i]/m);
            }
            if(hours<=h){
                lastValid = m;
                r=m-1;
            }
            else{
                l=m+1;
            }
        }
    return lastValid;
    }
}
