class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // let n = height.length;
        let water = 0;
        let l =0;
        let r= height.length-1;
        let lm =0;
        let rm=0;
        // let water = 0;

        while(l<r){
            if(height[l]<=height[r]){
                lm = Math.max(lm,height[l]);
                water+= lm - height[l];
                l++;
            }
            else{
                rm = Math.max(rm,height[r]);
                water+= rm -height[r];
                r--;
            }
        }

        return water;
    }
}
