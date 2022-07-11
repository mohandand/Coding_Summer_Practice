function BusiestTime(data){
    let count = 0;
    let maxcount = 0;
    let maxPeriod=0;
    for(let i=0;i<=data.length;i++){
        console.log(data[i][2])
        let e = data[i][1];
        if(e === 1){
            count += data[i][1]
        }else{
            count -= data[i][1]
        }
        
        if(i< data.length-1 && data[i][0] ==data[i+1][0]){
            continue
        }

        if(count>maxcount){
            maxcount=count;
            maxPeriod = data[i][0]
        }

    }

    return maxPeriod;
}

console.log(BusiestTime([ [1487799425, 14, 1], 
    [1487799425, 4,  0],
    [1487799425, 2,  0],
    [1487800378, 10, 1],
    [1487801478, 18, 0],
    [1487801478, 18, 1],
    [1487901013, 1,  0],
    [1487901211, 7,  1],
    [1487901211, 7,  0] ]))