
const arr = [1, 2, 10];
const str = 'sandsandksalsa';
const map = new Map();
const set = new Set();


// for (const something of str) {
//   console.log(something);
// }

// const iter = arr[Symbol.iterator];

// iter.next(); // 1
// iter.next(); // 2
// iter.next(); // 10
// iter.next(); // undefined

// function notGenerator () {
//   console.log(1);
//   console.log(2);
// }

// const notGenResult = notGenerator();

// console.log(notGenResult);

// console.log('============== GENERATOR NEXT ===============');

// function * generator () {
//   console.log(1);
//   yield 'first yield';
//   console.log(2);
//   yield 'second yield';
//   console.log(3);
//   return 'this is return';
// }

// const genIterator = generator();

// const nextRes1 = genIterator.next();

// console.log(nextRes1);

// const nextRes2 = genIterator.next();

// console.log(nextRes2);

// const nextRes3 = genIterator.next();

// console.log(nextRes3); // return 
// console.log(genIterator.next()); // undefined 
// console.log(genIterator.next());
// console.log(genIterator.next());
// console.log(genIterator.next());
// console.log(genIterator.next());
// console.log(genIterator.next());

function* infiniteNumbersGenerator() {
  try {
    let number = 0;

    while (true) {
      yield number++;
    }
  } catch (error) {
    console.log('bad stuff happened')
  }
}

const iterator = infiniteNumbersGenerator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const number of iterator) {
  console.log(number);

  if (number === 100) {
    iterator.throw('bad number');
    // iterator.return('bad number');
  }
}