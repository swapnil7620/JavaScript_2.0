console.log("hi");


// for more than one elemenet use class selector
// let boxes = document.getElementsByClassName("box")
// console.log(boxes);


// boxes[0].style.backgroundColor="green";
// boxes[1].style.backgroundColor="red";
// boxes[2].style.backgroundColor="blue";
// // boxes[2].style.backgroundColor="blue";
// boxes[3].style.backgroundColor="grey";
// boxes[4].style.backgroundColor="yellow";

// for perticular element  use id selector 
//  document.getElementById("red").style.backgroundColor="red"

 //quertSelector use this only for first element selection
//  document.querySelector(".box").style.backgroundColor="blue";

//quertselectorAll to apply functionlity to all the element

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor ="grey";
    
});

console.log(document.querySelectorAll(".box"));
// document.getElementByTagName
document.getElementsByTagName("div")


// let x = Math.floor((Math.random()  * 110) );
// console.log(parseInt(x));
