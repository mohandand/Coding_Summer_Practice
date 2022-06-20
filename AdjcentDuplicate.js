function removeDuplicates(s,k){
    let stack=[];
    for(let i=0;i<s.length;i++){
        let current=s[i];
        let peak = stack[stack.length-1]
        if(stack.length===0|| peak[0] !==current){
            stack.push([current,1])
        }else{
            peak[1]++;
            if(peak[1]===k){
                stack.pop();
            }
        }
    }
    let res="";

    for(let [char,count] of stack){
        res=res+char.repeat(count);
    }
    return res
}

console.log(removeDuplicates("deeedbbcccbdaa",3))