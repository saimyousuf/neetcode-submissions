class MyStack {
    constructor() {
        this.st = new Array();
        // return st;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.st.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        return this.st.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.st[this.st.length-1];
    }

    /**
     * @return {boolean}
     */
    empty() {return this.st.length===0?true:false;}
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
