/** 
 * Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
*/

// Gives control back to the caller
// Less memory

function* numbers() {
    console.log("Test")
    yield 1;
    console.log("Test 1")
    yield 2;
    console.log("Test 2")
    yield 3;
}

const gen = numbers();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next())

/** 
 * next() returns => {
  value: Any,
  done: Boolean
}
*/
function* evens() {
    let num = 0;
    while(true) {
        yield num += 2;
    }
}

const evenNumbers = evens()
console.log(evenNumbers.next())
console.log(evenNumbers.next())
console.log(evenNumbers.next())
console.log(evenNumbers.next())


//
function* crossBridge() {
  const reply = yield 'What is your favorite color?';
  console.log(reply);
  if (reply !== 'yellow') return 'Wrong!'
  return 'You may pass.';
}

{
  const iter = crossBridge();
  const q = iter.next().value; // Iterator yields question
  console.log(q);
  const a = iter.next('yellow').value; // Pass reply back into generator
  console.log(a);
}