
// class Animal{
//     constructor(){
//         console.log("start");
//     }

//     Lion(){
//         console.log("Lion is Hunting")
//     }
//     Rabbit(){
//         console.log("Rabbit may get Hunted Today")
//     }
// }
// let Animal1 = new Animal();
// console.log(Animal1);



class Animal{
    constructor(Name){
        this.name = Name;
        console.log("start");
    }
    Eat(){
        console.log("Animal are Eating")
    }
    Jump(){
        console.log("Animals Are Jumping")
    }
}

let Animal1 = new Animal("Bunny");
console.log(Animal1);

class Lion extends Animal{
    constructor(Name,age){//constructor overloading
       //  super(Name,age)//Easy way to call rather than below but  for same functionality 
        //if we want to perform overloading recommended to go for below method
        //Method Overloading
        super()
         this.name = Name;
         this.age = age;

    }
    //Method OverRiding
    Eat(){
        super.Eat();
        console.log("Lion is Hunting")
    }
}
let L = new Lion("Shera","18");
console.log(L);