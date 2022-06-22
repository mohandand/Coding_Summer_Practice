function Pivot(array){
    let sum = array.reduce((p,c) => p+c,0)
    return sum
}
console.log(Pivot([1,2,3,2,2,2]))