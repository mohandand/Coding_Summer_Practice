function mergeInterval(intervals){
    intervals.sort((a,b) => a[0]-b[0])

    let res = [intervals[0]]
    for(let interval of intervals){
        let end1 = res[res.length-1][1];
        let start2 = interval[0];
        let end2 = interval[1];
        if(end1>=start2){
            res[res.length-1][1] =Math.max(end1,end2)
        }else{
            res.push(interval)
        }
     }
     return res;
}
console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]]))