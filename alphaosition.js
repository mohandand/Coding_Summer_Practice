function alphaPos(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    alpha.split('');
    str.replace(/^[a-zA-Z]/).toLowerCase();
    console.log(str)
    let res=[];
    for( let char of str){
        res.push(str.indexOf(char) + 1);
    }
    return res;
}
console.log(alphaPos("bff$"));
