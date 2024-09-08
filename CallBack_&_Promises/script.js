// console.log("I am First")
// console.log("I am second")

// setTimeout(() => {
//     console.log("I am inside the function ")
// }, 2000);

// setInterval(() => {
//     console.log("i am latest")
// }, 2000);
//console.log("hi am outside the function");

console.log("This is promise");

let prom1 = new Promise((resolve, reject)=>{
    // let age = Math.random()*100;
    let age = prompt("enter the age")
    age = Math.ceil(age)
    confirm("are you age greater thean 18" + age)
    if(age<18){
        reject("age  is less than  you are not valid candidate")
    }
    else{
    setTimeout(() => {
        console.log("I am done")
        resolve("successful");
        
    }, 3000);
}
});

let prom2 = new Promise((resolve, reject)=>{
    let age = Math.random()*100;
    // age = Math.ceil(age)
    // confirm("are you age greater thean 18" + age)
    if(age<18){
        reject("age  is less than  you are not valid candidate 2")
    }
    else{
    setTimeout(() => {
        console.log("I am done 2")
        resolve("successful 2");
        
    }, 3000);
}
});
// prom1.then((age)=>{
//     console.log(age)
 // }).catch((err)=>{
  //   console.log(err)
 // })
// let  prom3 = Promise.all([prom1,prom2]) 

//    prom3.then((age)=>{
//     console.log(age)
// }).catch((err)=>{
//   console.log(err)
// });

let  prom3 = Promise.allSettled([prom1,prom2]) 

   prom3.then((age)=>{
    console.log(age)
}).catch((err)=>{
  console.log(err)
});