/* 
Two pointer Approch:
->Take start and end pointers find minimum of the two that become length 
and right-left becomes width 
->Intially take area = 0 and compare new area and replace if u get more area
-> move the start or end pointer based on whichever is lesser until start<end
 */


function maxAreaa(arry){
    let maxArea = 0;
    let start = 0
    let end = arry.length-1;
    while(start<end){
        let min = Math.min(arry[start],arry[end]);
        let area = [end-start]*min;

        if(area>maxArea){
            maxArea = area
        }

        if(start>end){
            end--
        }else{
            start++
        }
    }
    return maxArea
}

console.log(maxAreaa([1,8,6,2,5,4,8,3,7]));