//const multiply = (a, b) => a * b;
function multiply(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  }

  return 'Please provide two numbers';
}

function isEven(number) {
  const res = number % 2;

  return !!res
}

console.log(multiply(2, 3));
console.log(multiply('2', 3));
console.log('eee' * 3);

console.log(!![]);

const myObject = {
  name: 'Gérald',
  age: 23
};


myObject.age = 24;

function myFunction(person) {
  return {
    ...person,
    age: 30
  };
}

const myPerson = { name: 'Gérald', age: 27 };
const myResult = myFunction(myPerson);
console.log(myPerson);
console.log(myResult);

console.log([1, 2, 3, 4, 5].join('---'));

let i = 0
i = i + 2
i++
i += 3

function function1(myArray) {
  let max = myArray[0];

  for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > max) {
      max = myArray[i];
    }
  }

  return max;
}


function function2(n) {
  const fibs = [0, 1];

  for (let i = 2; i < n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }

  return fibs[fibs.length - 1];
}

console.log(function2(1000));



console.log(function1([1, 2, 3, 4, 5]));