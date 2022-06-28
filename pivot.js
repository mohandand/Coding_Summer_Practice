//Question:https://leetcode.com/problems/find-pivot-index/
// var pivotIndex = function(arr) {
//     const sum = arr.reduce((r, n) => r + n, 0);
//     let left = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const right = sum - left - arr[i];
//         if (left === right) {
//             return i;
//         }
//         left += arr[i];
//     }
//     return -1;
// };

var pivotIndex = function(nums) {
    let left = 0
    let right = nums.reduce((a, b) => a + b, 0)
    for(let i=0; i<nums.length; i++){
        right -= nums[i]
        if(left === right) return i
        left += nums[i]
    }
    return -1
};

console.log(pivotIndex([1,7,3,6,5,6]))