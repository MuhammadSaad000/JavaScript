//callback functions are those which are passed as arguments 
function makeUpperCase(val)
{
    console.log(val.toUpperCase());
}

function reverseString (val)
{
    console.log(val.split('').reverse().join(''));
}


function handleName(name,cb)   //cb will be a callback function
{
    const fullName =   `${name} Amjad`;
    cb(fullName);
}

handleName("saad", makeUpperCase)
handleName("props",reverseString)

//event listener callback

btn = document.getElementById("btn");

btn.addEventListener("click", function()
{
    console.log('btn clicked');
})

//callback hell
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");


btn.addEventListener("click" , ()=>{
    setTimeout(()=>{
        first.style.color="red";
        setTimeout(()=>{
        second.style.color="blue";
        setTimeout(()=>{
        third.style.color="green";
    },2000)
    },3000)
    },1000)
    
   

})