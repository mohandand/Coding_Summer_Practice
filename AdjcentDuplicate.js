function removeDuplicates(array,k){
    stack = [];
    for(let i=0;i<array.length;i++){
        let current = array[i];
        let peak = stack[stack.length-1];
        if(stack.legth===0 || peak[0] !== current){
                stack.push([current,1]);
        }else{
            peek[1]++;
            if(peek[1]==k){
                stack.pop();
            }
                }
    }
}