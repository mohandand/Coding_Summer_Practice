function inter(ar1,ar2){
    let obj1={};
    let res=[];
   for(i of ar1){
    obj1[i]? obj1[i]++: obj1[i]=1;
   }
    for(k of ar2){
        if(obj1[k]>0){
            res.push(k);
            obj1[k]--;
        }
    }
    return res
}

console.log(inter([1,2,2,1],[2,2]))