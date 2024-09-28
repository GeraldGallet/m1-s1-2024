const _ = require('lodash');
const fs = require('fs');

/**
 * 1. Use lodash to sort an array of numbers
 */
function sortArray(numbers) {
  return _.sort(numbers);
}
console.log('##### sortArray #####');
console.log(sortArray([2, 1, 3, 4, 5]));

/**
 * 2. Use lodash to remove duplicates from an array
 */
function removeDuplicates(myArray) {
  return _.uniq(myArray);
}

function removeDuplicates2(myArray) {
  return myArray.filter(
    (item, index, self) => self.findIndex((item1) => item1 === item) === index
  );
}

function removeDuplicates3(myArray) {
  const result = [];

  for (let i = 0; i < myArray.length; i++) {
    if (result.indexOf(myArray[i]) === -1) {
      result.push(myArray[i]);
    }
  }

  return result;
}

function removeDuplicates4(myArray) {
  return [...new Set(myArray)];
}

const myArray2 = [...[1, 2, 3], 4] // [1, 2, 3, 4] 

console.log('##### removeDuplicates #####');
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(removeDuplicates2([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(removeDuplicates3([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(removeDuplicates4([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));

/**
 * 3. Create an asynchronous function that returns a promise that resolves after 2 seconds
 * It generates a random number, if the number is < 0.5, it rejects, otherwise it resolves 
 */
function randomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random();

      if (number < 0.5) {
        reject(number);
      } else {
        resolve(number);
      }
    }, 2000);
  });
}

console.log('##### randomNumber #####');
console.log('Start');
const result = await randomNumber()
console.log(result);
console.log('End');

/**
 * 4. Read the content of a JSON file
 */
async function readFile(fileName) {
  const data = await fs.readFileSync(fileName, 'utf-8');

  return data
}

console.log('##### readFile #####');
console.log(await readFile('./data.json'));