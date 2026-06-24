class Solution {
    /**
     * @param {number[]} arr
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let l = 0;
        let r = arr.length-1
        while(l<=r){
            let mid = Math.floor(l + (r-l)/2);

            if(arr[mid]==target){return mid;}
            if(arr[mid]>target){
                r=mid-1;
            }
            else{
                l = mid+1;
            }
        }
        return -1;
    }
}
