class Solution {
    /**
     * @param {number[]} arr
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let l =0;
        let r = arr.length-1;
        
        while(l<=r){
            let m = Math.floor(l + (r-l)/2);
            if(arr[m] === target){
                return m;
            }

            if(arr[l]<=arr[m]){
                if(arr[l]<=target & target<arr[m]){
                    r=m-1;
                }
                else{
                    l=m+1;
                }
            }
            else{
                if(target>arr[m] && target<arr[l]){
                    l=m+1;
                }
                else{
                    r=m-1;
                }
            }

        }
        return -1;
    }
}
