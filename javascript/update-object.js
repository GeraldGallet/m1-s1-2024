const { result } = require("lodash");

function setAge(person, age) {
  person.age = age
  return person;
}

const myPerson = { name: 'Gérald', age: 27 }
const myNewPerson = setAge(myPerson, 28)

console.log(myPerson)
console.log(myNewPerson)


const myFunction = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world!')
    }, 5000)
  })
}

try {
  const result = myFunction();
  // Si je suis ici, tout va bien
  console.log('yipee')
} catch (err) {
  // Si je suis ici, il y a eu une erreur
  console.log('oh no')
}

