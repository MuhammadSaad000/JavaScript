
//Rest and spread operators 
//rest when declare function spread when invoke function

//Rest operator on arrays
const fruits = ['apple', 'lemon', 'banana' , 'orange'];

const [first,...restOfTheFruits] = fruits;

console.log(first,restOfTheFruits);

fruits.push("tamarind");
console.log(restOfTheFruits);


var keyFruit = restOfTheFruits.find((fruit)=>fruit==='banana');
console.log(keyFruit); 



//Rest operator on objects

var person = {
    fname : "Ali",
    lname : "Raza",
    age :  21
}

var {fname,...rest} = person;
console.log(fname,rest);


//Rest operator on functions 

const getAverage = (x,...scores) =>
{
    console.log(x);
    console.log(scores);

    var avg = scores.reduce((total,item)=>
    { return total +=item},0) /scores.length;

    console.log(avg);
}

const testScores = [12,34,12,3,36,59];

getAverage(person.fname,...testScores);


//spread : splits into single items and copy them
 
var myName = "Imran";
console.log(...myName);

var toppers =  ['ali' , 'usama' , 'anns'];
var backBenchers = ['hassan' , 'mohsin']
var prof = 'Zain';

const collection = [toppers, backBenchers , prof]

console.log(collection)     //nested arrays will be in collection 

const newCol = [...toppers , ...backBenchers, prof];    //If we will use the spread operator with prof = "Zain" , it will also be splitted
console.log(newCol);     //Individual arrays are broken and are now single elements of new array

console.log(newCol[2]);

const secCol = [...newCol]; //old array of newCol will not be affected if i add items to the array 

secCol[1] = "Saud";

console.log(secCol);    



//spread operator with objects 

const newPerson = {
    fname : "Shah",
    lname : "Zain",
    age : 21
}

const secPerson = {...newPerson , city : "Lahore"};
console.log(secPerson);