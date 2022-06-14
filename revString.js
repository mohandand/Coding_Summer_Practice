function revString(s){
    let start = 0;
    let end  =s.length-1;
    let temp;
    while(start<end){
    temp = start;
    start = end;
    end =start
    }
    return s
}

console.log(revString("hello"))