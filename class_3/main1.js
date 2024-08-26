// optional chaining operator =>  ?.
// null coalescing operator => ??

// const isLoggedIn = false;
// const value = isLoggedIn ?? "swikar";

// let hasError = true;

// const promise = new Promise((resolve, reject) => {
//   if (hasError) {
//     reject({ message: "internet connection error", code: 500 });
//   } else {
//     resolve({ name: "swikar", message: "hello" });
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("finally settled");
//   });

// non blocking code / async code
// async function main() {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("finally settled");
//   }
// }
// main();
// // timers
// setTimeout(() => {
//   console.log("running after timer is complete");
//   console.log("done !!");
// }, 2000);

// function waitFor(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function sleepChecker() {
//   console.log("before sleep");
//   await waitFor(3000);
//   console.log("after sleep");
//   console.log("done!");
// }

console.log("js connect vayo html sanga");

const heading1 = document.getElementById("heading_1");

const btn = document.getElementById("button_1");

const emptyDiv = document.getElementById("empty_div");

btn.addEventListener("click", () => {
  heading1.innerText = "naya heading";

  emptyDiv.innerHTML = `<div><p>heading is swikar</p></div>`;

  console.log("button click vayo");
});
