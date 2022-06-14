function sortColors(nums){
   let start=0;
   let end = nums.length-1;
   let curr =0;
   while(start<end){
    if(nums[start] === 0){
        let temp = nums[curr];
        nums[curr] = nums[start];
        nums[start] = temp; 
        curr++;
        start++;
    }
    else if(nums[start] ===2){
        let temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        end--
    }
    else{
        start++
    }
   }
}