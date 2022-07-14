function parMatch(s){
    let obj={
        '(':')',
        '{':'}',
        '[':']'
    }

    let stack = [];
    for(let char of s){
        if(char === '(' || char ==='{' ||char==='['){
            stack.push(char)
        }else{
            if(obj[stack.pop()] !== char){
                return false;
            }
        }
    }
    if(stack.length>0){
        return false
    }else{
        return true;
    }
}

console.log(parMatch('(){}[]([]'));