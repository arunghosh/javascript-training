// Mutable

// List is getting mutated
function addElement_Mutate(list, element) {
  list.push(element);
  return list;
}
const list = [1, 2, 4];
console.log(addElement_Mutate(list, 3));
console.log(list);

// Copy list using spread operator
const arr = [...list];

// Without mutations
function addElement_Pure(list, element) {
  const copy = [...list];
  copy.push(element);
  return copy;
}
console.log(addElement_Pure(arr, 10));
console.log(arr);

// Taking subset/element
console.log(arr[0]);
// first element
console.log(arr.slice(0, 1));
console.log(arr.slice(0, -1));
// last element
console.log(arr.slice(-2, -1));


// forEach
[1,2,3,4].forEach(item => console.log(item));

// map
[1,2,3,4].map(i =>  i * i);

// reduce
let total  = [1,2,3,4].reduce((item, aggr) => item + aggr, 0);
console.log(total);

// filter
const evens = [1,2,3,4].map(i =>  i % 2);


const even = x => x % 2 == 0;
const half = x => x / 2;
const sum = (item, aggr) => item + aggr;

// Pipe or chain result
const result = [1,2,3,4,5,6,7,8,9,10].filter(even).map(half).reduce(sum, 0);
console.log(result)