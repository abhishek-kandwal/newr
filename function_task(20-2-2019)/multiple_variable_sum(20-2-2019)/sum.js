// function for addition
function sum() {
    var value = 0;
    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}

// few test cases 
console.log(sum(3, 5));         // 2 variable
console.log(sum(14, -41));       // 2 variables , one is positive and one is Negative
console.log(sum(1, 3, 31, -1, 2));    // multiple variables
console.log(sum());  // no variables 