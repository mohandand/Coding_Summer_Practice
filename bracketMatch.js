function bracketMatch(text) {

    let stack = [];
  
    for(let item of text){  
      if (item === '(') stack.push(item);
      else if (stack[stack.length-1] === '(') stack.pop();
      else stack.push(item);   
    }
    
    return stack.length;
  }

  console.log(bracketMatch('(()'))