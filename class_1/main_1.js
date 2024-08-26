// let a = 12;
// let b = "ram";

// const c = "some constant value";

// let isLoggedIn = true;

// // true => true, "askjudh", if not 0, {}, [], {}, 1
// // false => false, "", 0, null, undefined

// let myName = "";

// const name = myName || "ram";

// const isOld = false;

// const age = isOld && 70;
// // const age1 = isOld ? 70 : isOld;

// if (4 > 1) {
//   //
//   //
// } else {
//   //
// }

// // ternary operator
// const name1 = 4 > 1 ? "ram" : "shyam";

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function hello(x) {
//   return "hello value is" + x;
// }

// const firstVal = hello(12);
// const secondVal = hello(10);

// function checkLogin() {
//   //kaam
//   return true;
// }

// const isUserLoggedIn = checkLogin();

// function getUser(email) {
//   // kaam
//   return "user" + email;
// }

// const user1 = getUser("ram@gmail.com");

// // f(x) = x + 3

// console.log("hello");

// const weekdays = ["mon", "tue", "wed", "thu", "fri"];

// const arr = [{ name: "hari", age: 1 }];

// optional chaining => ?.

// null coalesing => ??

const user = {
  name: "ram",
  email: "ram@gmail.com",
  age: 12,
  jobs: [
    {
      company: "some company",
      salary: 12000,
      title: "manager",
      hrs: 12,
    },
    {
      company: "some company 2",
      salary: 11000,
      title: "developer",
      hrs: 2,
    },
    {
      company: "some company3",
      salary: 1000,
      title: "designer",
      activites: ["asd", "sdfgs", "dfjgh"],
      hrs: 4,
    },
  ],
};

user.jobs[2].company;

// destructuring an object

// const name = user.name;
// const age = user.age;
// const email = user.email;

const { name, age, email } = user;

// destructuring an array

const jobs = ["manager", "developer", "tester", { name: "swikar", age: 12 }];

// const job1  = jobs[0]
// const job2 = jobs[1];

const [job1, job2, asd, obj] = jobs;

// undefined , null, not defined
// || ==> or operator, && ==> and operator
