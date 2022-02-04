arr1 = [1,3,5,7,9,11,13,15];
arr2 = [2,4,6,8,10,12,14,16];

//concatenates two arrays 
console.log(arr1.concat(arr2));

//copy within args --> target(1st arg) : from where to start copying array (req)
//--> first(sec arg) --> from where to start copy(opt)   //second(3rd arg) --> where to stop copying
//if sec

fruits = ['apple' , 'mango' , 'cherry', 'banana','kiwi','peanut '];

console.log(fruits.copyWithin(2,2,0));  //if first > second array remains unchanged

//array.entries -->give iterator for each element 

f = fruits.entries();

for(let i of f){    
    console.log(i);
}

//arr.every -->checks for every element of array if it fulfill the given condition  -->return val : true

console.log(fruits.every(checkLength));

function checkLength(fruit)
{
    if(fruit.length>5)
    {
        return true;
    }
    else
         return false;
}


//Array.fill --> fill array with specific element

console.log(fruits.fill("pineapple",1,4));  //index 1 to 3 filled (4-1=3) 
console.log(fruits.fill("pine",2,4));  //index 2 to 4 filled (4-2=2) 

console.log(fruits.fill("avocado"));    //whole array filled with avocado


//Array.filter --> provide array which pass a given condition
const ages = [10, 3, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);    

//Array.find --> provide first instance which pass a given condition

console.log(ages.find(checkAdult));   

//findIndex() returns the index of the first element that passes a test (provided by a function).
console.log(ages.findIndex(checkAdult));


//forEach--> calls a function for each array element 
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(numbers.forEach(myFunction));

//Array.From() --> converts a collection to individual elements
uni = "PUNJAB UNIVERSITY";
console.log(Array.from(uni));


//pagination example
const items = Array.from({length: 120}, (_,index )=> {
    return index;
})

console.log(items);

const itemsPerPage = 10;

const noOfPages = Math.ceil(items.length/itemsPerPage);

console.log(noOfPages);

const newItems = Array.from({length: noOfPages} , (_,index)=>{
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start+itemsPerPage);
    return tempItems;
});

console.log(newItems);


//Array.includes()--> search for a particular element 

cities = ['Kolkata', 'Mumbai' , 'chennai', 'lahore'];

console.log(cities.includes("chennai"));  //-->return true if item is present in list else false

console.log(cities.includes('lahore',0))    //start searching from 0th index 

//Array.indexOf()-->find index of particular element 

console.log(cities.indexOf('lAhore'));  //return -1 because it doesnt match any item in list 

//isArray--> check if parameter is array or not

console.log(Array.isArray(cities[0]));  

//Array.join()--> joins the elements of array with a specific separator

console.log(arr1.join("("));

//Map array elements to a specific function
y = [2,5,9,4];
console.log(y.map(Math.sqrt));

console.log(y.map((item)=>{
    return item*item;
}))

y.pop();    //deletes the last element from array

y.push("x");    //add to the end of array 

console.log(y);

//Array.reduce() --> reduce the array so to a single value
//two arguments are passed first is total and second is datatype iterator we want to return
//we always return first arg from callback function

const persons = [
    {name : 'Ali', age:19 , salary : 20000},
    {name : 'Akram', age:20 , salary : 10000},
    {name : 'asghar', age:9 , salary : 15000},
]

const totalAmnt = persons.reduce((total,per)=>{

    total += per.salary;
    return total;
},0);

console.log(totalAmnt);     //45000

//reducing a object 

const cart = [
    {company : "Samsung" , price : 50000 , qty :1},
    {company : "Realme" , price : 20000 , qty :2},
    {company : "Huawei" , price : 10000 , qty :4},
    {company : "Apple" , price : 30000 , qty :5}
]

let total = cart.reduce((total,cartItem)=>{

    const {qty,price} = cartItem;
    
    //count items 
    total.totalItems += qty;

    //count sum 
    total.cartTotal += price*qty;
    return total;
},
{
    totalItems : 0, cartTotal :0    //which attributes we want to get from an object 
})


console.log(total);

cart.shift();   //remove the first element of array
console.log(cart);


//slice(start,end)  --> start is inclusive end (not inclusive)
medias = ["Facebook", "Youtube", "Instagram" , "Whatsapp" , "Pinterest", "Quora"];
console.log(medias.slice(1,4));

console.log(medias.slice(-1,-4));   //first cannot be larger than second arg

console.log(medias.slice(-3,-1));   //slice from second element of array


console.log(medias.some((item)=>{
    item.length==4;
}))

//splice

console.log(medias.splice(2,0,"Podcasts"));    //At position 2, remove 2 items:

console.log(["Facebook"].valueOf(medias));