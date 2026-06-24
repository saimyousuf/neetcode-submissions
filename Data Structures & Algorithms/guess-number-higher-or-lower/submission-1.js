/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l =1;
        let r =n;
        while(l<=r){
            let m = Math.floor(l + (r-l)/2);
            if(0===guess(m)){return m};
            if(guess(m)===-1){
                r=m-1;
            }
            else{
                l=m+1;
            }
        }
        return -1;
    }
}
