class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        if(arr.length==1){return 1;}

        let ls = "";
        let l =1;
        let curr =1;
        let max = 1;
        while(l<arr.length){
            if(arr[l-1]>arr[l]){
                if(ls ===">"){
                    curr = 2;
                }
                else{
                    curr++;
                }
                ls=">";
            }
            else if(arr[l-1]<arr[l]){
                if(ls=="<"){
                    curr=2;
                }
                else{
                    curr++;
                }
                ls="<";
            }
            else{
                curr=1;
                ls="";
            }
            max = Math.max(curr,max);
            l++;
        }
        return max;
    }
}
