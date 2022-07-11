function BusiestTime(data){
    let count = 0;
    let maxcount = 0;
    let maxPeriod=0;
    for(let i=0;i<=data.length;i++){
        if(data[i][2]==1){
            count += data[i][1]
        }else{
            count -= data[i][1]
        }
        
        if(i<n-1 && data[i][0] ==data[i+1][0]){
            continue
        }

        if(count>maxcount){
            maxcount=count;
            maxPeriod = data[i][0]
        }

    }

    return maxPeriod;
}