function allUniqueCharcters(str){
    let obj={}
 for(let char of str){
   obj[char]? obj[char]++ : obj[char]=1;
 }

  let val = Object.values(obj)

  let res = val.every((item) => item==1 )

  return res;
}

console.log(allUniqueCharcters("abcdefghija"))