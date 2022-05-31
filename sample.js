function movezeros(array){
    let zeros = [];
    let ones = [];

    for(let i =0 ;i<array.length;i++){
        if(array[i] == 0){
            zeros.push(array[i])
        }else{
            ones.push(array[i])
        }
    }

    return [...ones , ...zeros]
}

console.log(movezeros([1,0,2,3,0,4,0]))