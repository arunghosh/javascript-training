/**
 *  Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * */

/**
 * Normally, when you exit a function, all its variables “disappear”.
 * This is because nothing needs them anymore. But what if you declare a function inside a function?
 * */

// Simple
function foo() {
  let name = "kv";
  return function inner() {
    console.log(name);
  };
}

console.log(foo());

// Complex
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// Emulating private methods with closures
let counter = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
