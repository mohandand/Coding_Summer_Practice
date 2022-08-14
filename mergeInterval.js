function mergeInterval(intervals){
    interval.sort((a,b) => a[0]-b[0])

    let res = [intervals[0]]
    for(let interval of interval){
        let end1 = res[res.length-1][1];
        let start2 = interval[0];
        let end2 = interval
     }
}