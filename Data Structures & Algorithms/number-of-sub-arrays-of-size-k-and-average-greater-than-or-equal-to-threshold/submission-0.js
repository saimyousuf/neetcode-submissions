class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let l =0;
        let count = 0;
        let r = 0;
        let sum = 0;
        while(r<arr.length){
            sum+=arr[r];

            if(r-l+1>k){
                sum-=arr[l];
                l++;
            }

            if(r-l+1==k && (sum/k) >= threshold){
                count++;
                }
            r++;
        }
        return count;
    }
}
