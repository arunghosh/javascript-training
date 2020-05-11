

// Arithmetic 
10 + 20;
10 ** 2;
5 % 3;

0x0f & 0xf0
0x0f | 0xf0

// Equality
// 1. Strictly equal
console.log(1 === 1);
console.log("Abcd" === "Abcd");
console.log(1 === "1");

// 2. Loose equal
console.log(1 == "1");

// 3. Referential equality
const a = {};
const b = a;
console.log(a === b);
console.log(a === {}); // Referncing different objects
