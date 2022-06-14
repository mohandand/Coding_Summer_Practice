function groupAnagrams(arr){
    let obj = {};
    for(str of arr){
        let sortedStr = str.split('').sort().join("");
        obj[sortedStr] ? obj[sortedStr].push(str) : obj[sortedStr] = [str];
    }
    return Object.values(obj)
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
