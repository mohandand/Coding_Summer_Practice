function makePowerNonDecreasing(power) {
    /**
     * Time Complexity : O(n)
     * Space Complexity: O(1)
     */
    let currentSum=0;
    let totalSum=0;
    
    for(let i=1;i<power.length;i++){
        if(power[i]>=power[i-1]){
            currentSum=0;
            continue;
        }else{
            if(power[i-1]+currentSum<=power[i]+currentSum){
                continue
            }else{
                currentSum+=power[i-1]-power[i]
                totalSum+=power[i-1]-power[i]
            }
        }
    }
  return totalSum
  }
  