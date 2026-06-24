class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let st = new Array();
        for(let i=0;i<asteroids.length;i++){
            let aster = asteroids[i];
            while(st.length>0 && st[st.length-1]>0 && aster<0){
                if(Math.abs(st[st.length-1])-Math.abs(asteroids[i]) === 0){
                    st.pop();
                    aster = 0;
                    // console.log("st = ",st)
                }
                else if(st[st.length-1]-Math.abs(asteroids[i]) <0 ){
                    st.pop();
                }
                else{
                    aster = 0;
                }
            }
            if(aster!=0){
                st.push(aster);
            }
    // console.log(st)
        }
    return st;
    }
}
