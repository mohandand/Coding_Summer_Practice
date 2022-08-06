/* 
[charcterName, count]-> this we will push to stack for first time and increse count each time whenever we see same charcter.

->Take stack and check if current element is equal to top of the stack then increase count and check weather 
that count equals to given k then remove from stack.
Otherwise push [charcterName, 1] 

->Finally cancatenate them
*/

function removeAdjacentDuplicates(str,k){
    let stack =[];
    let res = "";
    for(let i = 0;i<str.length;i++){
        let peak = stack[stack.length-1];
        if(stack.length == 0 || str[i] !== peak[0]){
            stack.push([str[i],1]);
        }else{
            peak[1]++
            if(peak[1] == k){
                stack.pop();
            }
        }   
    }
    for(let [char ,count] of stack){
        res = res + char.repeat(count);
    }
    return res;
}
console.log(removeAdjacentDuplicates("abbacd",2))