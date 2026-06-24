class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let map = new Map();
        let l =0;
        let r = 0;
        let max =0;
        while(r<fruits.length){
            map.set(fruits[r],(map.get(fruits[r])||0) + 1);

            while(map.size > 2){
                map.set(fruits[l],map.get(fruits[l])-1);
                if(map.get(fruits[l]) === 0){
                    map.delete(fruits[l]);
                }
                l++;
            }
            
            max = Math.max(max,(r-l+1),max);
            r++
        }
        return max;

    }
}
