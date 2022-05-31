function arrayi(ar1 ,ar2){
    let obj={};
     for(let i =0;i<ar1.length;i++){
         obj[ar1[i]] ? obj[ar1[i]]++ : obj[ar1[i]]=1;
     }
     let res = [];
     for(item of ar2){
         if(obj[item]>0){
             res.push(item);
             obj[item]--;
         }
     }
     return res
}

console.log(arrayi([1,2,3,3,4,],[1,2,3,3]))