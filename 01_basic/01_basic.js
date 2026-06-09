function greet(name){
    return "hello , ", name;
}


console.log(greet("world"));
console.log(greet(true));   // not expected but it works
console.log(greet(42));   // same not expected but it works

// In JavaScript, functions are flexible and can accept arguments of any type. 
// The greet function will concatenate the string "hello , " with the provided argument, regardless of its type. 
// This is why it works even when you pass a boolean or a number.

