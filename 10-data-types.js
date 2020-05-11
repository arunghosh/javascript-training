// 8 data types
// Seven data types that are primitives:
//     Boolean. true and false.
//     null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
//     undefined. A top-level property whose value is not defined.
//     Number. An integer or floating point number. For example: 42 or 3.14159.
//     BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
//     String. A sequence of characters that represent a text value. For example: "Howdy"
//     Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
// and Object -> Function, Date, Array


let temp = 10;
console.log(typeof(temp));
temp = 1.20;
console.log(typeof(temp));
temp = 0x20;
console.log(typeof(temp));
temp = "react";
console.log(typeof(temp));
temp = false;
console.log(typeof(temp));

temp = {}
console.log(typeof(temp));
temp = () => {};
console.log(typeof temp);
