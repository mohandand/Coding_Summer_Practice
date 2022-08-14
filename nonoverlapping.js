function nonoverLapping(intervals){
    intervals.sort((a,b) => a[0]-b[0])
    let res = 0;
    let previous = intervals[0]

    for(let i=1;i<intervals.length;i++){
        if(intervals[i][1]>previous[1]){
            res++
        }else{
            previous=intervals[i]
        }
    }
return res;
}

console.log(nonoverLapping([[1,2][2,3][3,4][1,3]]))