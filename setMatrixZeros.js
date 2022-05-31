/* 
Step1: Find all adress where zero is exists and push to an array
Step2: for each position loop through it and replace zeros using a helper function */

function setzero(matrix){
    let adds = [];
    for(let row=0;row<matrix.length;row++){
        for(let col=0;col<matrix[0].length;col++){
            if(matrix[row][col] == 0){
                adds.push([row,col])
            }
        }
    }
 for(let pos of adds){
     let row = pos[0];
     let col = pos[1];
     fil(row,col,matrix)
 }
 return matrix
}
function fil(r,c,m){
    //fill all coloum values
    for(let i =0;i<m.length;i++){
        m[i][c] = 0;
    }
    //fill all row values
    for(let i=0;i<m[0].length;i++){
        m[r][i] =0;
    }
}
console.log(setzero([[1,1,1],[1,0,1],[1,1,1]]
    ))