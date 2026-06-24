class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(nums) {
        let res = new Array(nums.length).fill(0);
        let st = new Array();
        let r = 0;

        while(r<nums.length){
            if(st.length==0){
                st.push([nums[r],r]);
            }
            else{
                if(st[st.length-1][0] >= nums[r] ){
                    st.push([nums[r],r]);
                }
                else{
                    while(st.length!=0 && st[st.length-1][0] < nums[r]){
                        res[st[st.length-1][1]] = r-st[st.length-1][1];
                        st.pop();
                    }
                    st.push([nums[r],r]);
                }
            }
            r++;
        }

        return res;
    }
}
