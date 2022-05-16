/*
Approach:
->First remove all other elements except a-z and 0-9
-> loop through string from front and back simultenoulsy and check if they are not same return false
-> if loop is completed then return true 
 */

function validPalindrome(s){
    let str = s.toLowerCase().replace(/[^a-z0-9]/g,'')
    for(let i=0,j=str.length-1;i<str.length;i++,j--){
        if(str.charAt(i)!==str.charAt(j))  return false
    }
    return true;
}
console.log(validPalindrome("A man, a plan, a canal: anama"))
