class Solution {
    /**
     * @param {string[]} ops
     * @return {number}
     */
    calPoints(ops) {
        let st = new Array();
        for(let i=0;i<ops.length;i++){
            if(ops[i]==="+"){
                let a = st.pop();
                let b = st.pop();
                
                st.push(b);
                st.push(a);
                st.push(a+b);
            }
            else if(ops[i]==="C"){
                st.pop();
            }
            else if(ops[i]==="D"){
                let a = st.pop();
                st.push(a);
                st.push(a*2);
                
            }
            else{
                // console.log(Number(ops[i]))
                st.push(Number(ops[i]));
            }
            // console.log(st)
        }
        // console.log(st);
        let t = st.reduce((acc,curr)=>acc+curr,0);
        return t;
    }
}
