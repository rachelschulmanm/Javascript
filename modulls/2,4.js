// const moonLanding = new Date("July 20, 21 00:20:18");
// let fre = moonLanding.getFullYear();
// console.log(fre);
// const date = new Date();
// console.log(date);
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let dayw = weekday[d.getDay()];
// const monthn = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   " August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const m = new Date();
// let monthv = month[m.getMonth()];

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;

let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(`Today is ${dayw} the ${day}- of ${month} -${year}`);
