const students =[
    {name:'ali', rollno : 30, grade : 'a'},
    {name:'sami', rollno : 12, grade : 'b'},
    {name:'ali', rollno : 3, grade : 'a'},
    {name:'asad', rollno : 11, grade : 'c'}
]


//Filter    --makes a new array and manage according to condition
const rno = students.filter((person)=>
{
   return person.rollno%3==0;       //we will perfrom operation on person as it is the object passed in our function
}
);

const grades = students.filter((varX)=>
{
    return varX.grade=='d';
}
);

console.log(rno);
console.log(grades);


//Find  --> returns only the first match -.No match = undefined
const myName = students.find((varX)=>{
    return varX.name="ali";
});  

console.log(myName);

const ages = [1,2,4,2,144,13];

const x = ages.find((vars)=>{
    if(vars%4==0)
    {   
        console.log("Yes thsi is fine ");
    }
    else {
        return;
    }

});

const test = ages.filter((vars)=>{
    if(vars%2==0)
    {
        console.log(vars);
    }
    else{
        return ;
    //  console.log("THis is a stirng to be removed ");
    }
})

console.log(x);
console.log(test);