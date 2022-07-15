function vowelsCount(str){
    let count=0;
    let reg = /[aeiou]/gi;
    for(let char of str){
        if(char.match(reg)){
            count++
        }
    }
    return count;
}
console.log(vowelsCount("aeious"))