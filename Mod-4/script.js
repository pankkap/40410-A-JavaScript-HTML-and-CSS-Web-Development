// statement in JavaScript
var a = 10;
var b = 20;
var c = a + b;
// document.write(c);
// console.log(c);
// window.alert(c);

// How we can create variables in JS
var d = "Pankaj"; // Global Variable Function Scoped
// Ecma6 2016
let e = "Sachin"; // Block Scoped Variable
const f = 10; // Will a constant variable, blocked Scoped
function sayHell() {
  {
    let msg = "Hi Friends";
    console.log(msg);
  }
  //   console.log(msg);
}
sayHell();

// Data types in JS
var datatype1 = 10; //Number
var datatype2 = "10"; //String
var datatype3 = true; //Boolean

// Operators in JS
// Arithmatic Operator, Logical, Relational, Ternary Operators

console.log(a + b); //10+20
console.log(a - b); //10-20
console.log(a * b); //10*20
console.log(a / b); //10*20
console.log(a % b); //10%20
console.log(a % b); //a<b, a>b, a<=b, a>=b, &&, ||, !

c = a > b ? "Say Hello" : "Say Bye";

var arr = [1, 2, 4, "pankaj", "sachin", true];
console.log(arr);

var person = {
  name: "pankaj",
  age: 30,
  job: "Trainer",
};
console.log(person);
console.log(person.name);

class Employee {
  //Data Members
  constructor(id, name, dept) {
    this.id = id;
    (this.name = name), (this.dept = dept);
  }
  //Member Function
  display() {
    // Template String
    console.log(
      `Emp ID: ${this.id}   \nEmp Name: ${this.name} \nEmp Dept: ${this.dept}`
    );
  }
}
// Class Objects

let obj1 = new Employee(101, "Manish", "Developing");
obj1.display();

let obj2 = new Employee(102, "John", "Training")
obj2.display();


// Function in JavaScript
// Named Function 
function sum(x,y)
{
    return x+y
}
console.log(sum(20,20))

// Expression Function
let subtraction = function(x,y)
{
    return x-y
}

console.log( subtraction(50,15))
// ECMA6
// Arrow Function (one line function)

let sub = (x,y) => x-y
console.log(sub(45,22))


