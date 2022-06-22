function arrayDiff(a, b) {
     return a.filter(item => !(b.includes(item)))
  }

  console.log(arrayDiff([1,,1,2,3],[1,1]))