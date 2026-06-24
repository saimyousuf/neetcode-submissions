class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0;i<matrix.length;i++){
            let found = this.binarySearch(matrix[i],target);
            if(found)return true
        }
        
        return false
    }

    binarySearch(arr,target){
        let l =0;
        let r = arr.length-1;
        while(l<=r){
            let m = l + Math.floor((r-l)/2);
            if(target==arr[m]){
                return true;
            }
            if(target>arr[m]){
                l=m+1;
            }
            else{
                r=m-1;
            }
        }
        return false;
    }

}
