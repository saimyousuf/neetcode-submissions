class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0;i<matrix.length;i++){
            let arr = matrix[i];
            if(this.binarySearch(arr,target)){
                return true;
            }
        }
        return false;
    }
    binarySearch(arr,target){
        let l = 0;
        let r =arr.length-1;
        while(l<=r){
            let mid = Math.floor(l + (r-l)/2);
            if(target==arr[mid]){
                return true;
            }
            else if(arr[mid]<target){
                l=l+1;
            }
            else{
                r=mid-1;
            }
        }
        return false;
    }
}
