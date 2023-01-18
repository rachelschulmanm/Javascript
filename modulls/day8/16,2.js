// function funcA() {
//   console.log(a); // undefind it is before the var
//   console.log(foo()); // it is func declaraition
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// funcA();

// var fullName = "John Doe";
// var obj = {
//   fullName: "Colin Ihrig",
//   prop: {
//     fullName: "Aurelio De Rosa",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };
// console.log(obj.prop.getFullName()); // the nearst get fullname
// var test = obj.prop.getFullName;
// console.log(test()); //undefind ther is no test//

// function funcB() {
//   let a = (b = 0);

//   a++;
//   return a;
// }
// funcB();
// console.log(typeof a); //endefind a was changed
// console.log(typeof b); // b = 0

// function funcC() {
//   console.log("1");
// }
// funcC(); //2
// function funcC() {
//   console.log("2");
// }
// funcC(); //2

// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d); // 1
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e); // error var is noe ex outside a func

// function funcE() {
//   console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f); //1 var
// var f = 1;
// funcE();
