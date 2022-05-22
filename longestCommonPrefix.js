function lcp(arry){
    for(let i=0;i<arry[0].length;i++){
        for(let j=1;j<arry.length;j++){
            if(arry[0][i] !== arry[j][i]) return arry[0].slice(0,i)
        }
    }
}