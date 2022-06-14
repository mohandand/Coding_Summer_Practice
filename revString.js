function revString(k){
    let s=k.split("");
    let start = 0;
    let end  =s.length-1;
    let temp;
    while(start<end){
    temp = s[end];
    s[end] = s[start];
    s[start] = temp;
    start++;
    end--;
    }
    return s
}

console.log(revString("hello"))