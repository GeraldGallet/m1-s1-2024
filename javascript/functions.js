function sayHello() {
  console.log('Hello World!');
  // return 'Hello World!';
}

function sayHelloToMe(name, age) {
  return `Hello ${name}, you are ${age} years old!`;
}

const add = (a, b) => {
  return a + b;
}

const makeOperation = (var1, var2, operation) => {
  return operation(var1, var2);
}

const myName = 'Gérald';
const myResult = myFunction();


const myResultWithParams = myFunctionWithParams(myName);
console.log(myResultWithParams)


const myAddResult = add(2, 3);
const myLambdaResult = myLambdaFunction();
const myOperationResult = makeOperation(1, 2, add)

console.log(myResult);
console.log(myResultWithParams);
console.log(myAddResult);
console.log(myLambdaResult);