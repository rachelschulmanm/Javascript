// q1
console.log(this); // refers to the global scope
// q2

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet(); // this refers to the window because it is in an arrow function
// i can change the type of the function
// q3
const myFuncDec = function () {
  console.log(this); //'stric mode' is undefined'
};
//q4
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow(); //  this refers to the window because it is in an arrow function
///5
document.querySelector(".element").addEventListener(() => {
  console.log(this);
}); //refers to the 'element
