const myString = 'Gérald'
const myNumber = 23
const myBoolean = false
const myArray = [1, 2, 3]
const myObject = { name: 'Gérald', age: 23 }
const myDate  = new Date()
const myNull = null
const myUndefined = undefined
const myRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

console.log('---- Variables')
console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myArray)
console.log(myObject)
console.log(myObject.name)
console.log(myObject.age)
console.log(myDate)
console.log(myNull)
console.log(myUndefined)
console.log(myRegExp)

const myAddition = 1 + 2
const myStringAddition = myString + ' ' + myNumber
const myWeirdAddition = myString + myArray
const myBooleanAddition = myBoolean + myNumber

console.log('---- Operations')
console.log(myAddition)
console.log(myStringAddition)
console.log(myWeirdAddition)
console.log(myBooleanAddition)