// var rotate = function(nums, k) {
// 	// array will become exactly the same after one full rotation (k === length)
// 	const rotations = k < nums.length 
// 		? k
// 		// so for cases when k is larger than array's length we just need a remaining uncomplete rotation
// 		: k % nums.length
 
//     const start = nums.length - rotations
//     // then we just take rotated elements from the end of the array
//     const rotatedPart = nums.splice(start)
//     // and put them in the beggining
//     nums.unshift(...rotatedPart)
// };
function rotate(nums,k){
  let rot = ((k%nums.length)<k) ? k :k%nums.length;
  const start = nums.length-rot;
  let temp = nums.splice(start)
  nums.unshift(...temp)
  return nums
}

console.log(rotate([1,2,3,4,5],2))
