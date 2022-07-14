function alphaPos(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let alphaa = alpha.split('');
    str.toLowerCase().replace(/[^a-z]/g ,'');
    console.log(alphaa,str);
}
console.log(alphaPos("bff$ss"));
