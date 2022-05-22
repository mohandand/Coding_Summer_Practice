function vowelCount(str){
    let count = 0;
   for(let char of str){
          if(char.match(/[aeiou]/g)){
              count++
          }
   }
   return count;
}
console.log(vowelCount("aeioua"))