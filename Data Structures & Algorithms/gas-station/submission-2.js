class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
          let total = 0;
  let gasTank = 0;
  let start =0;

  for(let i=0;i<gas.length;i++){
    total+=  gas[i] - cost[i];
    gasTank+= gas[i] - cost[i];
    if(gasTank<0){
        start=i+1;
        gasTank=0;
    }
  }

  return total>=0?start:-1;
    }
}
