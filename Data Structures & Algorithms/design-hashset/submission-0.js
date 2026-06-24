class MyHashSet {
    constructor() {
        this.map = new Array(1000001).fill(false);
        
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.map[key] = true;
        // return null;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {this.map[key]=false;}

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {return this.map[key]===true?true:false;}
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
