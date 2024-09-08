
//Immediately Invoked Function Expressions (IIFE) in JavaScript

// var counter = (function() {
// 	 var count = 0;
// 	return {
// 		increment: function() {
// 			count++;
// 		},
// 		decrement: function() {
// 			count--;
// 		},
// 		getCount: function() {
// 			return count;
// 		}
// 	};
// })();

// // Increment the counter
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();

// console.log(counter.getCount()); 

// // Trying to access the private count variable directly
// console.log(counter.count); // Output: undefined (cannot access private variable)

//spread Operator
// let a = [x,y,z,...rest]= [10,20,30,40,50];
// console.log(x,y,z,rest[0]);
// console.log(x,y,z,rest);
// console.log(x+y)
// console.log(a);

// let total = a.length;
// console.log(total);


//Object Desructor 
// const obj= {a:1,b:2,c:3};
// const{a,b}=obj;
// console.log(a,b);

//spread Function

// function sum(a,b,c) {
//     return a+b+c;    
// }
// let arr = [10,20,30];
// console.log(sum(...arr));//spreading here it makes  array iterable