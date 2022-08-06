/* 
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