// hoisting
// getName("email@gmail.com", "ram");

// function getName(email, age) {
//   console.log(arguments);

//   return email;
// }

// const a = getName(email, age);

// const getLocation = () => {
//   return { location: "usa" };
// };

// const b = getLocation();

// const user = {
//   name: "ram",
//   age: 12,
//   getLocation: () => {
//     console.log(this);
//   },
// };

// const name1 = "swikar sharma";

// const location1 = 'nepal "island"';

// const a = name1 + " is from " + location1;

// const b = `${name1} is from ${location1}`;

// const sentence = `my name is ${name1} as i live in ${location}`;

// spead operator in array
// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const allNumber = [...evenNumbers, ...oddNumbers];

// // spread operator in object

// const bharatpurLocation = {
//   city: "bharatpur",
//   country: "nepal",
//   province: "bagmati",
//   district: "chitwan",
//   // tannai xa aru
// };

// const user = {
//   name: "swikar",
//   email: "swikar@gmail.com",
// };

// const completeUser = {...user, bharatpurLocation}

// // rest operator in destructuring
// const { city, country, ...rest } = bharatpurLocation

// new Date()
// Thu Aug 22 2024 08:06:00 GMT+0545 (Nepal Time)
// new Date().toISOString()
// '2024-08-22T02:21:39.270Z'
// new Date().toGMTString()
// 'Thu, 22 Aug 2024 02:22:09 GMT'
// new Date().getMinutes()
// 7
// new Date("1990-10-20")
// Sat Oct 20 1990 05:45:00 GMT+0545 (Nepal Time)
// new Date("1990-20-10")
// Invalid Date
// new Date("1990-10-20")
// Sat Oct 20 1990 05:45:00 GMT+0545 (Nepal Time)
// new Date("1990/10/20")
// Sat Oct 20 1990 00:00:00 GMT+0545 (Nepal Time)
// new Date().getMilliseconds()
// 288
// new Date(2012, 01, 2)
// Thu Feb 02 2012 00:00:00 GMT+0545 (Nepal Time)
// new Date(2012, 01, 2, 3, 30)
// Thu Feb 02 2012 03:30:00 GMT+0545 (Nepal Time)
// new Date(2012, 01, 2, 3, 30).toISOString()
// '2012-02-01T21:45:00.000Z'
//

function addingOne(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let plusOne = numbers[i] + 1;
    result = [...result, plusOne];
  }

  return result;
}

addingOne([1, 2, 3]);

// map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// higher order function

// immutable function

const newNumbers = numbers.map((item) => item + 1);

const evenNumbers = numbers.filter((item) => item % 2 === 0);
const oddNumbers = numbers.filter((item) => item % 2 !== 0);

const value = false;

const ulto = !value;

// arry of users object with name and age

const users = [
  { name: "ram", age: 12 },
  { name: "shyam", age: 32 },
  { name: "sita", age: 52 },
];

const foundUser = users.find((item) => item.name !== "ram");

// mutable function
const arr = [2, 4, 6];
arr.push(10, 13);
arr.pop();
