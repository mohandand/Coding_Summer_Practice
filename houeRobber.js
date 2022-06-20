function maxRob(arr){
    if(arr.length==0) return 0;
    if(arr.length==1) return arr[0];
    if(arr.length==2) return Math,max(arr[0],arr[1])

    let maxatone = arr[0];
    let maxattwo = arr[1];
    let curmax;
    for(let i=2;i<arr.length;i++){
        curmax = Math.max(maxatone+arr[i] , maxattwo);
        maxattwo = curmax;
        maxatone = maxattwo;
    }

    return maxattwo
}

console.log(maxRob([2,7,9,3,1]))