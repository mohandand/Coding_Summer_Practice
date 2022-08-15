function anagram(str1,str2){
    let array = new Array(256).fill(0);
    if(str1.length !== str2.length) return false

    for(let i = 0;i<str1.length;i++){
        array[str1.charCodeAt(i)]++;
        array[str2.charCodeAt(i)]--;
    }
    for(let i=0;i<str1.length;i++){
        if(array[i] !==0){
            return false;
        }
    }
    return true
}

console.log(anagram("listen","netsli"));