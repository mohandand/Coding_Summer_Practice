function revInt(num){
    let rev = 0;
    while(num!=0){
        let rem = Math.floor(num%10);
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    return rev;
}
console.log(revInt(123456))