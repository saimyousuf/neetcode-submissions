class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;
        let prev=-1;
        for(let i =arr.length-1;i>=0;i--){
            prev=arr[i];
            arr[i]=max;
            max=Math.max(max,prev);
            // prev=max;
            // console.log(arr[i])
        }
        return arr;
    }
}
