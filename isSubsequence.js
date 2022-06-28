var isSubsequence = function(s, t) {
    let str = s.split('')
    let tar = t.split('')
    let count=0;
    let res=""
    for(let i=0;i<tar.length;i++){
        if(str[count] == tar[i]){
            res=res+str[count];
            count++
        }
    }
    
    return res==s;
};

console.log(isSubsequence("abc","adbecf"));
