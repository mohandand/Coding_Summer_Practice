
// Sort the array
// take i=0 as first and i+1 as start and nums.length-1 as last
// while start>end comapre 
         //->if sum is 0 then push it and increase start and decrease end
         //->if sum is lesser then 0 only increse start
         //->if sum is greater then 0 only decrese end
// Make sure all values are unique 
      //if(i>0 && num[i]===num[i-1]) continue;
      //while(start<end && num[start] ==num[start-1]) start=start-1;
      //while(start<end && num[end]==num[end+1]) end =end+1


      var threeSum = function(nums) {
        let res=[];
        if(nums.length<3) return res;
        nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length;i++){
            let start = i+1 ;
            let end=nums.length-1
            if(i>0 && nums[i]==nums[i-1]) continue;
            while(start<end){
                let sum=nums[i]+nums[start]+nums[end];
                if(sum==0){
                    res.push([nums[i],nums[start],nums[end]])
                    start +=1;
                    end -=1;
                    while(start<end && nums[start] === nums[start-1]) start +=1;
                    while(start<end && nums[end] ===nums[end-1]) end-=1;
                }
                else if(sum>0) end -=1;
                else if(sum<0) start +=1;
            }
        }
        
        return res;
    };

    console.log(threeSum([-1,0,1,2,-1,-4]))