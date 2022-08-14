/* 
first take first pair onto array and commpare with rest of the elements
main logic is comapring below 
if overlas merge it other wise push inteval
Ex:1 [1,2] [1,4]  2>=1  so change end point to [1,4]
Ex:2 [1,3],[2,6]  3>=2 so change end point to [1,6]
*/

function mergeInterval(intervals){
    intervals.sort((a,b) => a[0]-b[0])

    let res = [intervals[0]]
    for(let i=1;i<intervals.length;i++){
        let end1 = res[res.length-1][1];
        let start2 = intervals[i][0];
        let end2 = intervals[i][1];
        if(end1>=start2){
            res[res.length-1][1] =Math.max(end1,end2)
        }else{
            res.push(intervals[i])
        }
     }
     return res;
}
console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]]))