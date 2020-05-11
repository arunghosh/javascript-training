/** 
 * References
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
*/

// const sum = (a, b) => a + b;
function sum(a, b = 1) {
    return a + b;
}
console.log(sum(10, 20));

// Arrow function
const Person = function() {
    this.name = "Arun";
    // const printName = () => console.log(this.name);
    // const self = this;
    function printName() {
        console.log(this.name);
    }
    printName();
}
new Person();
