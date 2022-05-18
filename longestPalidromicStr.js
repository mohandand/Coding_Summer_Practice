/* Approch:

->Palindrome Mirror around center and there are two cases for Center

   ->Odd  Length : Then center is middle charcter  ex: aba then b is center  so center is i and i
     so we consider current value i as center for odd and decrement left pointer 
     and increment right pointer untill both of them are matched

  ->Even Length : then center is middle charecters ex: abba then bb is the center so center is i and i+1
     so we consider current value i and i+1 as center for even and decrement left pointer 
     and increment right pointer untill both of them are matched
    
  -> temp string to store Palindromic substring each time the size has increased  and will store it in res array of zero index.

  -> After Checking entire srting will return result arry of 0th value.
*/

var longestPalindrome = function(s) {
    let max=0;
   const arr=[];
   for(let i=0;i<s.length;i++){
       countPalindrome(s,i,i); // odd length
       countPalindrome(s,i,i+1); // even length
       
   }
   return arr[0];
   function countPalindrome(str,left,right){
       while(left>=0 && right<str.length && str[left]===str[right]){
           let temp =str.substring(left,right+1);
           if(max > temp.length){
               max  = max
           }else{
              max = temp.length
              arr[0] =temp
           }
           left--;
           right++;
       }
   }
};
console.log(longestPalindrome("abcba"))
