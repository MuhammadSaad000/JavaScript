//Arrow Functions in JavaScript
mySum = (a,b) => (a+b);
mySub = (a,b) => (a-b);
myProduct = (a,b) => (a*b);
myDiv = (a,b) => (a/b);
hello = () => "Hello world this is a ECMA6 Script Arrow Functions ";

//invoking Arrow functions
console.log(mySum(4,9));
console.log(myDiv(2,4));
console.log(mySub(5,9));
console.log(myProduct(4,9));
console.log(hello());


//Map method    
const arr = [1,5,2,32,1];   
console.log(arr.map(newfunction = (x) => x*10));      //direct arrow function is defined in braces  while x is an integer


const workers = [
    {name : "Saad", age : 20, blood :'B+ve'},
    {name:"Ali", age : 21, blood : 'A-ve' },
    {name:"sami", age:22,blood:'B-ve'}
]


const ages = workers.map((person) => {
    console.log(person.name);
});

const upperWorkers = workers.map((item) =>
{
    return (item.name.toUpperCase() + "  : " +  item.age*2 );
});

console.log(upperWorkers);


//getting unique values using Set 
const products = [
    {name : 'rmx1911 ' , category : "SmartPhone", model : 2019, company : "Realme"},
    {name : 'a20s' ,category:"SmartPhone", model : 2019 , company: "Samsung"},
    {name : 'iPhone 13 ProMax ' , category : "IPhone", model:2020, company :"Apple"},
    {name : "POCO X3", category:"FlagShip", model : 2021, company : 'Xiomi'}
]

function cats(x)
{
   return x.category;
} 

console.log(new Set(products.map(cats)));
console.log(products);

//Dynamic object keys --


const person={
    name:'Ali'
}

console.log(person.name);
person.bg = "B-ve";
console.log(person);


const items = {
    ["featured-items"] : ['item1', 'item2']   //storing array in form of string
}
console.log(items);


let appState = 'loading';   //we will be storing application state in this variable this will act as a key
const keyName ="";  //keyname is now an empty string
const app={
    [appState]:true     //assigning value to appState variable
}
app[keyName] = 'fruit';
console.log(app);

const state={
    loading : true, 
    name :" ",
    job:2
}

function updateState(key,value) //key what key we want to change of particular object and value = what we assigning that key
{
    state[key] = value;     //syntax : nameOfObject[keyName] = newValue      
}

updateState('loading',false);     //we assign values when we invoke function--must add quotes in key
updateState('job',23);
updateState('city',"Lahore"); //adding new key dynamically

console.log(state);