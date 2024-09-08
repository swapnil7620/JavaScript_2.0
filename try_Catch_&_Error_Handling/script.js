let a = prompt("Enter a First_Number");
let b = prompt("Enter a Second_Number");
let sum = parseInt(a) + parseInt(b);
if(isNaN(a)  || isNaN(b)){
    throw SyntaxError("This is not allowed");
}
// finally specially used in function
function main(){ 
let x = 1
try {
    // console.log("The Sum of two Numbers ", sum*x);
    console.log("The Sum of two Numbers ", sum);
    // return true;
} catch (error) {
    console.log("Something is wrong", error );
    // return false;
}
finally{
    console.log("connection is closed")
}

}

main();
