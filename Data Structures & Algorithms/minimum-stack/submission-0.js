class MinStack {
    constructor() {
         this.st = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.st.length==0){
            this.st.push([val,val]);
        }
        else{
            if(this.st[this.st.length-1][1]>val){
                this.st.push([val,val]);
            }
            else{
                this.st.push([val,this.st[this.st.length-1][1]]);
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.st.length==0){return null;}
        return this.st.pop()[0];
    }

    /**
     * @return {number}
     */
    top() {return this.st[this.st.length-1][0];}

    /**
     * @return {number}
     */
    getMin() {return this.st[this.st.length-1][1];}
}
