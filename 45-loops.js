/** 
 * Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/

// Normal Loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}
// console.log(i);

// for..in loop
var arr = [3, 5, 7];
// arr = {
//     name: "KV"
// }
for (let i in arr) {
  console.log(i); 
}

// for..of loop
for (let i of arr) {
  console.log(i); 
}
