var a = 20;
let b = 40;
const c = 100;
{
    let b = 20;
    const c = 30 ;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
console.log(b)
console.log(c)

// SHADOWING 
var x = 100;
{
    let x = 10;
    console.log(10)

}
// ILLEGAL SHADOWING 

let y = 20;
{
    // var y = 200;
    console.log(y)
}

// that a given variable should not go beyond its own scopr. y is global scoped and 