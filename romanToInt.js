function romanToInt(num){
    const symbols = {
        I:1,
        V:4,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let value =0;

    for(let i=0;i<num.length;i++){
        symbols[num[i]] <symbols[num[i+1]] ? value -=symbols[num[i]] : value+=symbols[num[i]]
    }
    return value;
}

console.log(romanToInt("XXI"))