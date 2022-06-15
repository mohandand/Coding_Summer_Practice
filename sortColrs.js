
/* Because you have only 3 values, 0, 1, 2, you can do it in one pass with 3 pointers.
You know that if you encounter a 0, you can move it to the left group, and if a 2, to the right group.
Two of the pointers are the edges of those 2 groups, while your third pointer is to the element that you will iterate and check values of.

So, checking one element at a time, swap it with the left edge if it's a zero, and right side if it's a 2. If it's a 1, leave it and go next (it will be moved/swapped later if necessary). */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let zero = 0;
    while(left <= right) {
        if(nums[left] === 0) {
            let temp = nums[zero];
            nums[zero] = nums[left];
            nums[left] = temp;
            left++;
            zero++;
        } else if(nums[left] === 2) {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            right--;
        } else {
            left++
        }
        
    }
    return nums;
};

console.log(sortColors([2,2,0,1,2,0]))