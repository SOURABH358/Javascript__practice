// Arrow function
// Arrow function are used to write shorter function expressions they work similar to regular functions but have some differences then the regular functions.
// 1. they are function expression so they are not hoisted at the top of the scope
// 2. However, this is not associated with arrow functions. Arrow function does not have its own this. So whenever you call this, it refers to its parent scope.
function OuterFunction(){
    this.age = 25;
    console.log(this.age) // 25
    let InnerFunction = () => {
        console.log(this.age) // 25
    }
    InnerFunction();
}
OuterFunction();
// Regular functions have arguments binding. That's why when you pass arguments to a regular function, you can access them using the arguments keyword. For example,
function RegFunct(){
    console.log(arguments) // { '0': 7, '1': 8, '2': 9 }
}
RegFunct(7,8,9);
let ArrFunc= (...n)=>{
    console.log(n) // [1,2,3]
}
ArrFunc(1,2,3)
// You should not use arrow functions to create methods inside objects.
// You cannot use an arrow function as a constructor. For example,