// Call, Bind and Apply in JS
// 1. What is Call ?
let obj = { name: 'Sid' }
function sayHello(age, profession) {
  return `Hello ${this.name}, age is ${age} and is an ${profession}`
}
// console.log('Call', sayHello.call(obj, 34, 'Software Developer'))

// 2. What is Apply ?
function sayHello(age, profession) {
  return `Hello ${this.name}, age is ${age} and is an ${profession}`
}
// console.log('Apply', sayHello.apply(obj, [34, 'Software Developer']))

// 3. What is Bind ?
function sayHello(age, profession) {
  return `Hello ${this.name}, age is ${age} and is an ${profession}`
}
const bindFunc = sayHello.bind(obj)
// console.log('Bind', bindFunc(34, 'Software Developer'))
// console.log('Bind', bindFunc(34, 'Senior Software Engineer'))
