/* 
arra = [1,0,2,0]
lets take c=0;
loop thoruogh array and when u dont see 0 just interchange elements with c

at 0 index its not zero so interchange 0 with 0 so its same and increase c now c=1
at 1 index its zero so dont do any thing
at 2 intercahnage it with c=1  [1,2,0,0]
at 3 0 dont do anytihng its done
*/

function moveZeros(array){
    let c = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]!==0){
            [array[i],array[c]] = [array[c],array[i]]
            c++
        }
    }
    return array
}

console.log(moveZeros([1,0,2,0]))