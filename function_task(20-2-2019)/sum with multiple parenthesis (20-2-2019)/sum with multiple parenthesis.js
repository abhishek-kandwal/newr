// here the add function which will add the passed arguments. 
function add(a,b) {
  if (arguments.length === 1) {
    return function(b2) { 
      return a + b2;      
    };
  }
  return a + b;
}

// here 2-test cases
console.log(add(10, 10)); // with normal passing
console.log(add(10)(10)); // with multiple parenthesis 