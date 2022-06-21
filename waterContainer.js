function waterArea(array){
 let left=0;
 let end = array.length-1;
 let res=0;
 while(left<end){
    let height = Math.min(array[left],array[end])
    let area = (end-left) * height;
   
   if(area>res) res=area;
   
   (array[left]>array[end]) ? end--:left++;
   
 }
 return res;
}

console.log(waterArea([1,8,6,2,5,4,3,7]))