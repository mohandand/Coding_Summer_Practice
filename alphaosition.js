function alphaPos(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let alphaa = alpha.split('');
    let text = str.toLowerCase().replace(/[^a-z]/g ,'');
    console.log(alphaa,text);
    let res=[];
    for(let char of text){
        res.push(alphaa.indexOf(char) + 1)
    }
    return res;
}
console.log(alphaPos("Cbff$ss"));
