function Pivot(array){
    let sum = array.reduce((p,c) => p+c,0)
    let leftsum = 0;
    for(let i=0;i<array.length;i++){
        let rightsum  = sum-left-array[i];
        if(rightsum==leftsum){
            return i
        }
        leftsum = leftsum+array[i]
    }
}
console.log(Pivot([1,2,3,2,2,2]))