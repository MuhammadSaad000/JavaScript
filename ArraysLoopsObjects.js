//OBJECTs in JS
const person = {firstName:"ali", lastName:"Khan", age:29, BloodGroup:"B+ve"};
console.log(person);
console.log(person.firstName);  //displays name of person in object



//arrays are mutable in Javascript 
let arrX = new Array("Saad", "Ali","Raza","Salim");
console.log(arrX[2]);
arrX = new Array("naeem","taha","lateef","mohsin");
console.log(arrX[2]);
console.log(typeof(arrX));  //arrays are of object types

//array methods in Js
const num=(1,4,5,6,1,4,76);
num[2] = 98;    //changing array elements
console.log(num);   //last value is assigned
console.log(typeof(num));


const arr = ["Kia","suzuki","Honda","Audi","Daihatsu"];
console.log(arr);   //size and elements will be displayed
arr[2]="Toyota";
console.log(arr);
console.log(arr.sort());    //array becomes sorted alphabetically

arr.push("Ferrari");    //adding element to array 
console.log(arr);
var x =  arr.pop(); //delete the last element from array and stores in x
console.log(x);
console.log("After deleting last element from array : " + (arr));   

//Functions 
function mySum(a,b)
{
    return (a+b);
}
function myMinus(a,b)
{
    return (a-b);
}
function myProduct(a,b)
{
    return a*b;
}
function myDivide(a,b)
{
    return a/b;
}

console.log("Sum : " +mySum(4,4));
console.log("Subtract : "  +myMinus(4,5));
console.log("Product : " + myProduct(3,9));
console.log("Divide : " + myDivide(4,40));

//loops 
for(var i =0;i<5;i++)
{
    console.log("THe number is : " + i);
}

var sum=0;
const numX = [2,4,1,5,7];
for(var i=0;i<numX.length;i++)
{
    sum+=numX[i];
}
