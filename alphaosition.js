function alphaPos(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    alpha.split('');
    str.toLowerCase().replace(/[^a-z]/g ,'');
    console.log(alpha,str);
}
console.log(alphaPos("bff$ss"));
