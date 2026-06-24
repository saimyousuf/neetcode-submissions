class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let r =0;
        let l =0;
        let ml =-1;
        let mr =-1;
        let missingCustomers = 0;
        let maxMissingCustomers =0;
        while(r<customers.length){
            if(grumpy[r]===1){
                missingCustomers+=customers[r];
            }

            if(r-l+1 == minutes){
                if(missingCustomers>maxMissingCustomers){
                    ml=l;
                    mr=r;
                    maxMissingCustomers=missingCustomers;
                }
                if(grumpy[l]==1){
                    missingCustomers-=customers[l];
                }
                l++;
            }

            r++;

        }
            let count =0;
            console.log("ml =",ml)
            console.log("mr == ",mr)
        for(let i=0;i<customers.length;i++){
            if(i>=ml && i<=mr){
                count+=customers[i];
            }
            else  if(grumpy[i]==0){
                count+= customers[i];
            }
            console.log(count)
        }
        return count;
        
    }
}
