var isSubsequence = function(s, t) {
    let count=0;
    let res=""
    for(let i=0;i<t.length;i++){
        if(s[count] == t[i]){
            res=res+s[count];
            count++
        }
    }
    
    return res==s;
};

console.log(isSubsequence("abc","adbef"));
