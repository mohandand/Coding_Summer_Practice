function inter(ar1,ar2){
    let obj1={};
    let res=[];
   for(let i=0;i<ar1.length;i++){
    obj1[ar1[i]]? obj1[ar1[i]]++: obj1[ar1[i]]++;
   }
    for(let i=0;i<ar2.length;i++){
        if(obj1[ar2[i]]){
            res.push(ar2[i]);
            obj1[ar2[i]]--;
        }
    }
}