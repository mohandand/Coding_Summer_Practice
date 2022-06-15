/**
 * Step 1, create a table of the known correlations between integers and roman numerals. 
  include the 6 edge cases where subtractions are used to create roman numbers
 * Step 2, extract the keys from that table into an array,  and sort  array in descending order
 * Step 3, loop over that array
 * step 4, for every number in the array, create a while loop that runs while number < = the integer. 
 *  if yes, then subtract the number from the integer AND append the number's roman number counterpart to 
 * the result string
 * step 5, if the while loop has stopped running, check whether the integer is within range - 
 * if its <=0 then we are done. break out of the outer for loop, otherwise continue the for loop
 * step 6, return the result
 * 
 */

 // constraints :  int will be positive, in range from 1 to 3999


 var intToRoman = function(num) {
    const table = {
        '1000':'M',
        '900':'CM',
        '500':'D',
        '400':'CD',
        '100':'C',
        '90':'XC',
        '50': 'L',
        '40': 'XL',
        '10': 'X',
        '9': 'IX',
        '5': 'V',
        '4': 'IV',
        '1': 'I'    
    } 
    
    let res=""
    
    let nums = Object.keys(table).sort((a,b) => b-a)
    
    for(let i=0;i<nums.length;i++){
        let key = nums[i];
        
        while(key<=num){
            num = num-key;
            res = res + table[key]
        }
        
        if(num<=0) break;
    }
    
       return res
   };