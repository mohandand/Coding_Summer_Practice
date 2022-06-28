var isIsomorphic = function(s, t) {
    let obj1={};
    let obj2={};
    for(let i=0;i<s.length;i++){
        if(obj1[s[i]] !== obj2[t[i]]) return false;
        obj1[s[i]] = i;
        obj2[t[i]] = i;
    }
    return true
};

console.log(isIsomorphic("paper" , "title"))