function revInt(num){
    let res = 0;
    while(num>0){
        let last = num % 10

        res = res *10 +last;

        num = Math.floor(num/10);
    }

    return res;
}
console.log(revInt(12));