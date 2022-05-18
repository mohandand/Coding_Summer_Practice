/* Approach:
->Divide Array into two parts and check if mid is equal to target or not 
->Check mid is greater than start 
    ->if above is true then check if target is in between start and mid then change end to mid otherwise change start to mid

->Check mid is less than end 
    ->if above is true then check if target is in between mid and end then change end to mid otherwise change start to mid
->If above are not true just come out of loop
-> if you didnt find targte then check whether end value is equal to target if not return -1
*/
function search(nums, target){
    let start = 0;
    let end = nums.length-1;
    while(start<end){
        let mid = Math.floor((start + end)/2);
        if(target == nums[mid]){
            return nums[mid]
        }
        //if left array is sorted
        if(nums[mid]>nums[start]){
            if(target >= nums[start] && target<=nums[mid]){
                end= mid-1
            }else{
                start = mid+1
            }
        }
        //if right array is sorted
        else if(nums[mid]<nums[end]){
            if(target>=nums[mid] && target<=nums[end]){
                    start = mid+1
            }else{
                end=mid-1
            }
        }
        else{
            break
        }
    }
    return nums[end]===target?end:-1
}

console.log(search([4,5,6,7,0,1,2],0))