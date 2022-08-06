function maxAreaa(arry){
    let maxArea = 1;
    let start = 0
    let end = arry.length-1;
    while(start<end){
        let max = Math.max(arry[start],arry[end]);
        let area = max*max;

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