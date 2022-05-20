function twoSum(nums,target){
    let map = {};
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]>=0){
              return(comp[nums[i]],i)
        }
        map[target-nums[i]]=i
    }
    return []
}