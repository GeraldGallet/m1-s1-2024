/** 
 * 1. Write a function to compute the sum of an array of number
 */
function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
console.log('##### sumArray #####');
console.log(sumArray([1, 2, 3, 4, 5]));

/**
 * 2. Write a function to compute the maximum of an array of numbers
 */
function maxOfArray(numbers) {
  if (numbers.length === 0) {
    return -1;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
console.log('##### maxOfArray #####');
console.log(maxOfArray([1, 2, 3, 4, 5]));

/**
 * 3. Write a function to reverse an array
 */
function reverseArray(myArray) {
  const reversedArray = [];

  for (let i = myArray.length - 1; i >= 0; i--) {
    reversedArray.push(myArray[i]);
  }

  return reversedArray;
}
console.log('##### reverseArray #####');
console.log(reverseArray([1, 2, 3, 4, 5]));

/**
 * 4. Write a function to compute the mean of an array of numbers
 */
function meanOfArray(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return sumArray(numbers) / numbers.length;
}
console.log('##### meanOfArray #####');
console.log(meanOfArray([1, 2, 3, 4, 5]));

/**
 * 5. Check they all work with an empty array
 */

console.log('##### Empty array #####');
console.log(sumArray([]));
console.log(maxOfArray([]));
console.log(reverseArray([]));
console.log(meanOfArray([]));

/**
 * 6. Write a function to compute the Fibonacci sequence of n elements
 */

function fibonacciNotRecursive(n) {
  const fibs = [0, 1];

  for (let i = 2; i < n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }

  return fibs;
}

function fibonnaciRecursive(n) {
  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return 1;
  }

  return fibonnaciRecursive(n - 1) + fibonnaciRecursive(n - 2);
}