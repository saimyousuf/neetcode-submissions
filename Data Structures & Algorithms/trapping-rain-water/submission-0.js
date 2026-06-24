class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let water = 0;
        for(let i=0;i<n;i++){
            let lm = 0;
            let rm = 0;

            for(let l = 0; l<=i;l++){
                lm = Math.max(lm,height[l]);
            }
            for(let r=i;r<n;r++){
                rm= Math.max(rm,height[r]);
            }
            water += Math.min(lm,rm) -height[i];
        }
        return water;
    }
}
