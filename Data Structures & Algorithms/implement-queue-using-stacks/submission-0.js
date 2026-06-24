class MyQueue {
    constructor() {
        this.q=new Array();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {this.q.push(x);}

    /**
     * @return {number}
     */
    pop() {
        return this.q.shift();
    }

    /**
     * @return {number}
     */
    peek() {return this.q[0]; }

    /**
     * @return {boolean}
     */
    empty() {return this.q.length===0?true:false;}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
