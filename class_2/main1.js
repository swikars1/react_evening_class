// const user = {
//   name: "ram",
//   age: 12,
//   getLocation: function () {
//     return this;
//   },
// };

// function getUrl(email, name) {
//   console.log(arguments)
// }
// const getUrl = () => ({ url: "http://sd.d" });

// getUrl();
// const user = {
//   name: "ram",
//   age: 12,
//   getLocation: () => {
//     return this;
//   },
// };

// function getName() {
//   return "swikar";
// }

// const a = getName();

// const name = "swikar";
// const address = "usa";
// const random = 'hja"sv"d askjdh';

// const sentence = "i am " + name + " and i live in " + address;

// const sentence1 = `i am ${name} and i live in ${address}`;

// // spread operator in array
// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// const numbers = [...evenNumbers, ...oddNumbers];

// // spread operator in object
// const user = {
//   name: "ram",
//   age: 12,
// };

// const address = {
//   country: "nepal",
//   province: "bagmati",
//   district: "chitwan",
// };

// const completeUser = { ...user, ...address };

// // rest operator

// const { name, district, ...rest } = completeUser;

// new Date()
// Thu Aug 22 2024 17:45:03 GMT+0545 (Nepal Time)
// new Date().getFullYear()
// 2024
// new Date().toISOString()
// '2024-08-22T12:00:41.259Z'
// new Date().toGMTString()
// 'Thu, 22 Aug 2024 12:01:21 GMT'
// new Date().getSeconds()
// 45
// new Date().getSeconds()

// 49
// new Date().getSeconds()

// 50
// new Date().getSeconds()

// 51
// new Date().toLocaleDateString()

// '8/22/2024'
// new Date(2012)
// Thu Jan 01 1970 05:30:02 GMT+0530 (Nepal Time)
// new Date("2012")
// Sun Jan 01 2012 05:45:00 GMT+0545 (Nepal Time)
// new Date("2012", "1", "23", "11","22")
// Thu Feb 23 2012 11:22:00 GMT+0545 (Nepal Time)
// new Date("2012", "1", "23", "11","22").toISOString()
// '2012-02-23T05:37:00.000Z'

// function addingOne(numbers) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     result = [...result, numbers[i] + 1];
//   }
//   return result;
// }

// const arr = [2, 5, 7, 8, 23];

// addingOne(arr);

// // higher order function, immutable function
// // map
// const a = arr.map((item) => {
//   const calculation = item - 1;
//   return calculation;
// });

// // array of objects of user with name, email and age

// const users = [
//   { name: "ram", email: "ram@gmail", age: 12 },
//   { name: "shyam", email: "shyam@gmail", age: 32 },
//   { name: "sita", email: "sita@gmail", age: 52 },
// ];

// const adults = users.filter((item) => {
//   const condition = item.age > 18;

//   return condition;
// });

// const specificUser = users.find((item) => item.age > 18);

// mutable function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.push(11);
numbers.pop();

const arr = a.map(() => {});
