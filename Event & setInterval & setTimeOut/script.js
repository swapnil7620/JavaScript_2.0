let button = document.getElementById("btn");
button.addEventListener("click",()=>{
    // alert("i am clicked 👍")
    // confirm("are you 18+")
 let b= document.querySelector(".box").innerHTML="<b>i am trying to out 😐<b/>"
  
})

let button1 = document.getElementById("btn1");
button1.addEventListener("dblclick",()=>{
   let b1 = document.querySelector(".box1").innerHTML="<b>I am out of the box😁<b/>"
//    document.write("we are in the game")
})

//  button = document.getElementById("btn1");
button.addEventListener("contextmenu",()=>{
   alert(" press here  to continue")
})


// button.addEventListener("keydown",(e)=>{
// console.log(e)
// })

document.addEventListener("keydown",(e)=>{
   console.log(e.key, e.keyCode)
})