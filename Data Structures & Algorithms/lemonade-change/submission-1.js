class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let l =0;
        let fc =0;
        let tc =0;
        
        while(l<bills.length){
            if(bills[l]===5){
                fc++;
                console.log("5 came at",l)
            }
            else if(bills[l]===10){
                if(fc<=0){return false;}
                fc--;
                tc++;
                console.log("10 came at",l)
            }
            else{
                console.log("20 came at",l)
                if(tc>0 && fc>0){
                    tc--; fc--;
                }
                else if(tc<=0){
                    if(fc>=3){
                        fc-=3;
                    }
                    else{
                        return false;
                    }
                }
                                    else{
                        return false;
                    }
                
            }
            l++;
        }
        return true;
    }
}
