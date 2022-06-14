function revString(s){
    let left = 0;
    let right = s.length-1;
    while(left<right){
        let hold = s[left];
        s[left] = s[right];
        s[right] =hold;
        left++;
        right--;
    }
    return s;
}
console.log(revString("RAJU"))