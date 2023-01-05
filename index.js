function x(){
    var a = 10;
    
    function y(){
        console.log(a)
    }
    return y
}
var z = x();
console.log(z)
z(); // 10 
// z is binded with its lexical environment i.e with the scope of function x (its parent \ where it is defined) it maintains closure - (x) and closure - (y) 
