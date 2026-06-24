class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const carsTime = position.map((pos,i)=>({pos,time : (target-pos)/speed[i]}));
        carsTime.sort((a,b)=>b.pos-a.pos);
        let fleet = 0;
        let last = 0;
        for(let car of carsTime){
            if(car.time>last){
                last=car.time;
                fleet++;
            }
        }
        console.log(carsTime);
        return fleet;
    }
}
