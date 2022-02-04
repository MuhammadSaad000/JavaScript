//variables  are declared using var , let and const keywords in js var and let are same
var p = 10;
let q = 20;


console.log("Add : "+ (p+q));   //subtraction and addition must be done with brackets around 
console.log("Minus : " + (q-p));    
console.log("Product : " + p*q);
console.log("Divide : " + p/q);
console.log("INcrement : " + ++p); 
console.log("Decrement : " + (p-=1));
console.log("Exponential : " + p**q); //exponent is taken using double asteriak operator
console.log("using math functions : " + Math.pow(5,2))

let a = "Jack Ma";
let b = "Jack Ma";   //spaces are counted while comparing strings 
if(a==b)    ///boolean 
{
    console.log("Both strings are same ");
}
else{
    console.log("Strings are not same ")
}

//concatination of strings
console.log(a+" THis is an extra line " + b);


let x = new String("Haider");
let y = new String("Haider");
//two objects if compared are not equal 
if(x==y)
{
    console.log("Both strings are equal ");
}
else
{
    console.log("Strings not eqyal ");
}


let x1 = 34.00;
let x2 = 34;
let x3 = 3.14;
console.log(x1+x2+x3);      //js datatypes are dynamic thatswhy decimaLs and ints are added 

console.log(typeof(x1));
console.log(typeof(x)); //object 
console.log(typeof(a));
console.log(typeof(x2));

