function spiralCopy(inputMatrix) {
    let res=[];
    let top=0;
    let bottom=inputMatrix.length-1;
    let left=0;
    let right=inputMatrix[0].length-1;
    let direction = "right"
    
    while(top<=bottom && left<=right){
      if(direction=="right"){
        for(let i=left;i<=right;i++){
          res.push(inputMatrix[top][i]);
        }
        top+=1;
        direction="down"
      }
      else if(direction=="down"){
        for(let i=top;i<=bottom;i++){
          res.push(inputMatrix[i][right]);
        }
        right-=1;
        direction="left"
      }
      else if(direction=="left"){
        for(let i=right;i>=left;i--){
          res.push(inputMatrix[bottom][i]);
        }
        bottom-=1;
        direction="up"
      }
      else if(direction=="up"){
        for(let i=bottom;i>=top;i--){
          res.push(inputMatrix[i][left]);
        }
        left+=1
        direction="right"
      }
    }
     return res
   }