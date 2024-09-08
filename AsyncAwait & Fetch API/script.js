 // By using callBack function and promises but Async is better way as given below 

// function getData(a,b){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455);
//             return c =  a+b,
//             console.log(c),
//             console.log("process completed");
            
//         }, 5000) ; 
//     })
// }

// console.log("i am first");
// console.log("i am second");
// console.log("i am Thired");

// let data = getData(10,20);
// data.then((v)=>{
// console.log(data);
// console.log("process data ");
// console.log("task 2");

// });


//  async function getData(){
//     //getting data from the server
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//               resolve(500)
//             console.log("process completed");
//         }, 5000) ; 
//     })
// }


// fetch API 
async function getData(){
    //getting data from the server

  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //  let data =await  x.json()
    //  console.log(data);
     let data1 =await  x.text()
    console.log(data1);


}
async function main(){
console.log("i am first");
console.log("i am second");
console.log("i am Thired");

let data =  await getData();
console.log(data);
console.log("process data ");
console.log("task 2");

}
main();