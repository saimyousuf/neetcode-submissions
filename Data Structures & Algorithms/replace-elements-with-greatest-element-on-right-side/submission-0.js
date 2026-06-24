class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rep = [];
        let cg = -1;
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i]>cg){
                rep.push([arr[i],i-1]);
                cg=arr[i];
            }
        }

        let ans = new Array(arr.length).fill(-1);
        let j =0;
        for(let i = rep.length-1;i>=0;i--){
            let value = rep[i][0];
            let index= rep[i][1];

            while(j<=index){
                ans[j]=value;
                j++;
            }

        }
        return ans;
    }
}
