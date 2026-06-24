class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        // customers.sort((a,b)=>a-b);/''
        let l = customers.length-1;
        let r =  customers.length-1;
        
        let awc = 0;
        let maxwc = 0;
        let ml =-1;
        let mr = -1;
        while(l>=0){
            if(grumpy[l]===1){
                awc+=customers[l];
            }

            if((r-l+1)===minutes ){
                if(awc>maxwc){
                    maxwc = awc;
                    ml = l;
                    mr = r;
                }
                
                if(grumpy[r]===1){
                    awc -= customers[r];
                }
                r--;
            }

            l--;

        }
        // console.log(customers)
        // console.log(ml)
        // console.log(mr)

        let ans = 0;
        for(let i=0;i<customers.length;i++){
            if(i>= ml && i<=mr){
                ans+= customers[i];
            }
            else{
                if(grumpy[i]===0){
                ans+=customers[i];}
            }
            console.log(ans)
        }

            
        return ans;
    }
}
