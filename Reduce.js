const cars =[
    {name : "Audi",  model : 2010},
    {name : "Ferrari",  model : 2000},
    {name : "Wagonr",  model : 2014},
];
const newObject = {name : "Hayabusa" , model : 2012};
cars.push({name : 'Mehran' ,model:0});  //pushing object 
cars.push(newObject);


console.log(cars);

const ex = cars.map((varx)=>
{   
    return varx.model/4;
});

console.log(ex);

//reduce --> gives us a single number 

const arr = [2,13,33,24,23,12,91];
const tax = arr.reduce(test,0);
function test(total,num)
{
   total -=num;
   return total;   
}

console.log(tax);

const fullModels = cars.reduce(totalModel,0);
function totalModel(total,varx)
{
    return (total+=varx.model);
}
console.log(fullModels);



//reduce object --> getting the total no. of items and price like we implement in cart
const cart = 
[

    {model : 'Samsung Galaxy A10s ', price : 20000 , amount :1 },
    {model : 'Realme 5 ', price : 25000 , amount :2 },
    {model : 'Oppo Reno f5 ', price : 55000 , amount :5 },
    {model : 'Xiomi note 9', price : 29000 , amount :4 }

]

let tex = cart.reduce(test, {
  //define type of object we are returnig from reduce function
    totalItems : 0,
    cartTotal : 0
   });

function test(total,cartItems)
{
   {
    
    //assigning valuews of every cart object to this unnamed variable
   const {price,amount} = cartItems; 
   //count items
   
   total.totalItems += amount;

   //counting total price
    total.cartTotal += amount*price;

   return total;
}
 
}

console.log(tex);


//another example of reduce objects --> getting a single objekt
const github = [
    {Language : 'Javascript', repos : 4 , freq : 10},
    {Language : 'C++', repos : 9 , freq : 4},
    {Language : 'Java', repos : 8 , freq : 10},
    {Language : 'Ruby', repos : 1 , freq : 7},
];

let myRepos = github.reduce(fuzz, {totalRepos :0, Level:0});    
function fuzz(total, repox)     //second argument is object we return 
{
    const {repos, freq} = repox;    //defining syntax of object we are going to return
    
    //count repos 
    total.totalRepos += repos;
    //counting total frequncy
    total.Level += freq;

    return total;
}

console.log(myRepos);