let x = "THis lad named shah ";
let part= x.slice(4,12);    //copies string from 4to12 index and stores in new string 
console.log(part);
console.log(x);
let y = x.replace("shah", "Ali");   //args must be written properly i.e capitalization 
console.log(y);
console.log(y.toLowerCase());
console.log(y.toUpperCase());

console.log(x.concat("in between string ",y));  //concatenates two strings
console.log(x.indexOf("lad"));      //return 5 bcoz lad is starting from 5 index
console.log(x.includes("nAI"));   //boolean return true if argument is in string 
console.log(x.length);    //gives length of string

//escape characters
console.log("THis is a single \\ backslash ");
console.log("This is a single \' quote");
console.log("This is a double  \" quote");
console.log("THisi is a \n newline \v character \r  with \t a tab space ");

var d = new Date();
console.log(d);

//Math library
console.log(Math.E);    //displays e=2.71 
console.log(Math.ceil(3.76));       //gives upper value
console.log(Math.floor(3.76));      //gives lower value
console.log(Math.round(3.55555));
console.log(Math.trunc(4.9));   //truncate decimal part 
console.log(Math.pow(3,5));
console.log(Math.sqrt(110));
console.log(Math.sin(3.4)); //trigonometry
console.log(Math.cos(3.4));
console.log(Math.tan(3.4));
console.log(Math.min(40,78,291,-2,212));
console.log(Math.max(10,290,12,324,124,123));
console.log(Math.sign(20));    //if no sign ans=0 else ans=1 or -1 if +ve or -ve for 0 it return 0
console.log(Math.abs(-9.8));

//random 
console.log(Math.random()); //return a random number bw 0 and 1
console.log(Math.random()*10);  //gives a random bw 0 to 9
console.log(Math.random()*90)+1;    //Math.random() * (max - min + 1) + min

