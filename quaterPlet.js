function findArrayQuadruplet(arr, s) {
    let n = arr.length;
    if (n < 4) return [];
        arr.sort((a,b)=>a-b)  
    for(let i=0;i<n-4;i++){
      for(let j = i+1;j<n-3;j++){
         low = j + 1, high = n - 1;
        while(low<high){
          let sum = arr[low]+arr[high]+arr[i]+arr[j];
          if(sum==s){
            return [arr[i], arr[j], arr[low], arr[high]]
          }else if(sum < s){
            low++;
          }else{
            high--;
          }
        }
      }
    }  
    return [];
    
  }
console.log(findArrayQuadruplet([4,4,4,4],16))  