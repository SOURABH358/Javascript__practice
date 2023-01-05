// function statement
// a();
// b();
function a(){
    console.log('a function')
}
// function expression
let b = function xyz(){
    console.log(xyz);
    
}
// b();
// xyz();
// difference 
// function statement are hoisted whereas function are not hoisted
// function b is an anonymous function
// function a is a named function

// arguments and parameters
// 1) parameters are the named variables that receives passed on values inside a function
function x(name){
    console.log('Hello 🙏🏻 ', name);
}
// 2) arguments are the values that are passed while calling a function
// x('Sourabh')

// FIRST ORDER FUNCTION
// whenever we are using function as a value they are called as a first order functions

let c = function (){
    console.log(xyz);
    
}

function y(z){
    const l = 'I am a first order function';
    z();
}

// y(function(){
    // console.log('I am a first order function')
    // console.log(l)
// })
function w(){
    let l = 'I am a first order function';
    let v = function (){
        // console.log('I am a first order function')
        console.log(l)
    }
    return v;
}

let t = w()
t();