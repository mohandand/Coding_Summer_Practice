function arrayDiff(a, b) {
    let obj={}
    for(let i=0;i<a.length;i++){
      obj[a[i]]?obj[a[i]]++:obj[a[i]]=1;
    }
    
    let keys = Object.keys(obj);
    let res=[];
    
    for(let key of keys){
        console.log(key)
        console.log(b.includes(key))
      if(b.includes(key)){
        if(obj[key]>0){
        res.push(key);
        obj[key]--;
          }
      }
    }
    
    return res
  }

  console.log(arrayDiff([1,2,3],[1,2]))