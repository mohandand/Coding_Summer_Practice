/* Approch:

->Palindrome Mirror around center and there are two cases for Center

   ->Odd  Length : Then center is middle charcter  ex: aba then b is center  so center is i and i
     so we consider current value i as center for odd and decrement left pointer 
     and increment right pointer untill both of them are matched

  ->Even Length : then center is middle charecters ex: abba then bb is the center so center is i and i+1
     so we consider current value i and i+1 as center for even and decrement left pointer 
     and increment right pointer untill both of them are matched
    
  -> temp string to store Palindromic substring each time abd push it result array

  -> After Checking entire srting will return result array
*/
function palidromicSubstrings(s){
    let max =0;
    let res =[];
    let temp = '';
    for(let i=0;i<s.length;i++){
        listOfPalindromes(s,i,i)
        listOfPalindromes(s,i,i+1)
    }
    return res;
    function listOfPalindromes(s,left,right){
       while(left>=0 && right<s.length && s[left]==s[right]){
           temp = s.substring(left,right+1)
           res.push(temp)
           left--;
           right++;
       }
    }
}
console.log(palidromicSubstrings("aaa"))