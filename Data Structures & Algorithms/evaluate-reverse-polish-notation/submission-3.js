class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let st = new Array();
        
        for(let i=0;i<tokens.length;i++){
            if(tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/"){
                let b = st.pop();
                let a = st.pop();
                if(tokens[i]==="+"){
                b+=a;
                }
                else if(tokens[i]==="-"){
                    b = a-b;
                }
                else if(tokens[i]==="*"){
                    b = b*a;
                }
                else if(tokens[i]==="/"){
                    b = Math.trunc(a / b);
                }
                
                st.push(b);
                
            }
            else{
                st.push(Number(tokens[i]));
            }
// console.log(st);

        }
        return st.pop();

    }
}
