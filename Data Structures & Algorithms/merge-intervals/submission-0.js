class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        
        let ans = [intervals[0]];

        for(let j=1;j<intervals.length;j++ ){
            let last = ans[ans.length-1];

            if(last[1]>=intervals[j][0]){
                last[1] = Math.max(last[1],intervals[j][1]);
            }
            else{
                ans.push(intervals[j]);
            }

        }
        return ans;
    }
}
