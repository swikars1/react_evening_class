// let a = 12;
// // let name = "ram"

// // name = "asd"

// const age = 12;

// age = 12;

// console.log(a, age);

// // undefined , null , not defined
// //  || ==> or, && ==> and

// const myName = "sita";
// const name = myName || "ram";

// const name2 = myName && "raasdasm";
// // myName ? "raasdasm" : myName

// // ? : ternary operator
// // condition ? true : false

// if (4 > 1) {
//   //
//   //
//   //
//   //
// } else {
//   //
// }

// 4 > 1 ? console.log("true") : console.log("false");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function hello(x) {
//   if (x == 3) {
//     return "hello 3";
//   } else {
//     return "hello";
//   }
// }

// // function checkLogin() { }

// // function isLoggedIn() {

// // }

// // function getUser(email) {
// //    //aikusjdh
// // }

// // getUser("ram@gmail.com");

// const answer = hello(3);
// const answer1 = hello(12);

// const weekdays = ["monday", "tudesday", "wed", "thurs", "fri"];

// console.log(weekdays[4]);

const user = {
  name: "ram",
  email: "ram@gmail",
  age: 12,
  jobs: [
    { name: "manager", hrs: 5 },
    { name: "developer", hrs: 10, location: "asd", activites: ["bsd", "sdc"] },
    { name: "designer", hrs: 2, location: "Asd" },
  ],
};

user.jobs[1].activites[0];

// null coalescing operator

user?.jobs?.[1]?.activites?.[0];

// destructuring an object

// const name = user.name
// const age = user.age;
// const email = user.email;
// const jobs = user.jobs;

// const { name, email } = user;

// destructuring an array

const user1 = ["ram", "usa", { id: 1, name: "hello" }];

const naam = user1[0];
const location = user1[1];
const obj = user1[2];

// const [naam, location, obj] = user1;
