function alphaPos(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    alpha.split('');
    str.replace(/^[a-zA-Z]/).toLowerCase();
    let res=[];
    for( let char of str){
        res.push(indexOf(char) + 1);
    }
}
console.log(alphaPos("abcde"))
