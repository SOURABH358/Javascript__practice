// ################################################### SPREAD OPERATOR ############################################
// 1. spread operator is used to expand an iterable objects into its elements
const arr1 = [1,'hello', false]
const arr2 = [...arr1]
console.log(arr2) // [1, 'hello', false]

// 2. it can be used for passing an object as an individual elements during function calls
function myFunc(){

}
const arr3 = [];
myFunc(...arr3)
// 3. as an alternative to apply
const arr4 = [3,4,5];
console.log(Math.max.apply(null, arr4)) // 5
console.log(Math.max(...arr4)) //5

const arr5 = ['hello', 'how', 'are','you'];
const arr6 = ['new','words']
const arr7 = ['more', 'words']
arr5.unshift.apply(arr5, arr6)
console.log(arr5) // [ 'new', 'words', 'hello', 'how', 'are', 'you' ]
arr5.unshift(...arr7)
console.log(arr5) // [ 'more',  'words', 'new', 'words', 'hello', 'how', 'are', 'you' ]

// 4. can be used to concatenate two or more objects or create new objects

const arr8 = ['hello',7,{name:'James'},false]
const arr9 = ['word', ...arr8, 'comments', true]

console.log(arr9) // [ 'word', 'hello', 7, { name: 'James' }, false, 'comments', true ]
const datearr = ['2023','01','02'] // 2023-02-01T18:30:00.000Z
const date1 = new Date(...datearr)
console.log(date1)
// 5. spread operator does shallow copy just like object.assign()
const arr10 = [['original'],['array'],['with values']];
const arr11 = [...arr10]
arr11.shift().shift()
console.log(arr10) // [ [], [ 'array' ], [ 'with values' ] ]
// 6. spread operator cannot be used to mutate original objects for that you need to use object.assign()
const obj1 = {y:'new',x:234};
console.log(Object.assign(obj1, {x:133})) // { y: 'new', x: 133 }