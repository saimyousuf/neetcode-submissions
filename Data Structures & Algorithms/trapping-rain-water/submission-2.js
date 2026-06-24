class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l =0;
        let r = height.length-1;
        let lmax = 0;
        let rmax = 0;
        let area = 0;

        while(l<r){
            if(height[l]<=height[r]){
                lmax = Math.max(lmax,height[l]);
                area+= lmax-height[l];
                l++;
            }
            else{
                rmax = Math.max(rmax,height[r]);
                area+= rmax-height[r];
                r--;
            }
        }
        return area;
    }
}
