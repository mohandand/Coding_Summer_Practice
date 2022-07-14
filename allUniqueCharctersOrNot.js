function allUniqChar(str){
  let obj = {};
  for(let char of str){
    obj[char] ? obj[char]++ :obj[char] =1;
  }
   let val = Object.values(obj);
   
   return val.every(num => num>1);
     
}
console.log(allUniqChar("abc235"))