// Lexical scope

function lexi1() {
  let name = "kv";
  function print() {
    console.log(name);
  }
  print();
}
lexi1();

// Function scope
function functionScope() {
  {
    // Will get hoisted
    var name = "JS"; // function
  }
  console.log(name);
}
functionScope();

// Block scope
function blockScope() {
  {
    let name = "JS"; // function
  }
  console.log(name);
}
blockScope();
