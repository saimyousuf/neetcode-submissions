class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l =1;
        let r =x;
        while(l<=r){
            let m = Math.floor(l+(r-l)/2);
            if(m*m === x){
                return m;
            }
            else if(m*m <x){
                l=m+1;
            }
            else{
                r=m-1;
            }
        }
        return r;
    }
}
