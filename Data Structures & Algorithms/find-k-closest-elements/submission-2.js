class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l =0;
        let r = arr.length-1;
        let ans = [];

        while((r-l+1)>k ){
            if(Math.abs(arr[l]-x) > Math.abs(arr[r]-x)){
                l++;
            }
            else{
                r--;
            }
        }

        for(let i=l;i<=r;i++){ans.push(arr[i]);}
        return ans;
    }
}
