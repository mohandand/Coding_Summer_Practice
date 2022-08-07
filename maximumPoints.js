/* 
->first get sum of K values from left 
->Then we should run loop for k times and substract last left value form toatl and replace with last right value
 and get maximum out of it.

*/



function maxPoints(array,k){
    let left = 0;
    let right = 0;
    let maxScore = 0;

    for(let i = 0;i<k;i++){
        left += array[i]
    }
    maxScore = left;
    let end = array.length-1;

    for(let i = k-1;i>=0;i--){
        left = left -array[i];
        right = right + array[end];

        maxScore = Math.max(maxScore , right+left);

        end--;
    }
 return maxScore;
}

console.log(maxPoints([9,7,7,9,7,7,9],7))

