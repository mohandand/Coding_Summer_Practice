function alphaPos(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    alpha.split('');
    str.replace(/^[a-zA-Z]/).toLowerCase();
    let res=[];
    for( let char of str){
        res.push(str.indexOf(char) + 1);
    }
    return res;
}
console.log(alphaPos("bf"))
