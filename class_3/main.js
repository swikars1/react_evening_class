// const value = false || "swikar";

// // null coalescing operator
// let isLoggedIn = false
// const loggedInValue = isLoggedIn ?? "sd";

// let hasError = true;

// const promise = new Promise((resolve, reject) => {
//   if (hasError) {empty_div
//     reject({ message: "Error occured" });
//   } else {
//     resolve({
//       message: "data fetched",
//       user: {
//         id: 1,
//         name: "swikar",
//       },
//     });
//   }
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => console.log(e))
//   .finally(() => console.log("finally"));

// async code non-blocking code
async function main() {
  try {
    const res = await promise;
    console.log(res);
  } catch (err) {
    console.log("error is", err);
  } finally {
    console.log("finally");
  }
}

// main();

// function toRunLater() {
//   console.log("hello");
//   console.log("hi");
// }
//   console.log("before sleep");

// setTimeout(() => {
//   console.log("Asda")
// }, 5000);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function sleepChecker() {
  console.log("before sleep");
  await sleep(2000);
  console.log("after sleep");
}

console.log("js attach vayo");

// const el = document.getElementById("main_heading");

// el.innerHTML = `<p>heading is swikar</p>`;

const button = document.getElementById("click_me");

console.log("button is", button);

button?.addEventListener("click", handleButtonClick);


function handleButtonClick() {
  console.log("button clicked");
}

const temp = "swikar, ram, hari";

const valuesArray = temp.split(", ");

const people = ["ram", "shyam", "sita"];

people.join(" | ");
