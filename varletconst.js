// difference between var let and const 

/** ############################################## VAR ############################################   */

// 1. var is function scoped, variable defined outside a function are global scoped meaning they will be available globally 
var theme = 'yellow';
function themeDecider(){
    var theme1 = 'red';
    console.log(theme); // yellow
}
// console.log(theme1); // give error --> that theme1 is not defined in the given scope

// 2. var can be redefined in the given scope as example below

var greet = 'Hello';
var greet = 'say Hello';
console.log(greet);

// 3. var are hoisted at the top of the given scope

console.log(petName); // undefined
var petName= 'crabby';

// the above console.log will not give error but will display undefined as petName is hoisted at the top but it is initially assigned undefined value until it is reassigned a value at line 22.

console.log(petName) // crabby

/** ################################################## LET ############################################# */

// 1. they are block scoped {} meaning they will be available inside these curly braces 
let var2 = 'random';
if (true){
    let var2 = 'unique';
    console.log(var2) // unique
}
console.log(var2) // random
// 2. they cannot be redeclared in the given scope

// let var2 = 'hello'; // error

// 3. they are hoisted at the top but unlike var they are not initialized with undefined 

// console.log(color) // reference error
let color = 'black'

/** ################################################## CONST ############################################# */
// 1. const has a lot of similarities with const they are also block scoped {}
// 2. const cannot be reassigned any value neither they can redeclared
const value = 'constant'
// value= 'change' // error assignment to constant variable

// 2.1. but you can do
const obj = {name:'Joey', nickname:'Joe'};
obj.name = 'Josh'
console.log(obj) // {name:'Josh', nickname: 'Joe'}
// 3. const are also hoisted at the top but without any intialization so using them before their intialization will give reference error.

