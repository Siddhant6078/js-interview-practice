let car1 = {
  color: 'Red',
  company: 'Ferrari'
}

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  )
}

// Polyfill for call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'Its not callable')
  }
  context.fn = this
  context.fn(...args)
}
// purchaseCar.myCall(car1, '$', 5000000)

// Polyfill for apply
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + 'Its not callable')
  }
  if (Array.isArray(args)) {
    throw new Error('CreateListFromArrayLike called on non-object')
  }
  context.fn = this
  context.fn(...args)
}
// purchaseCar.myApply(car1, ['$', 5000000])

// Polyfill for bind
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable")
  }
  context.fn = this
  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}
const newFunc = purchaseCar.myBind(car1, '$')
// console.log(newFunc(5000000))

// Polyfill for map
Array.prototype.myMap = function (cb) {
  const temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  return temp
}
const arr = [1, 2, 3]
const res = arr.myMap((a) => a * 2)
// console.log('myMap', res)

// Polyfill for filter
Array.prototype.myFilter = function (cb) {
  const temp = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i])
    }
  }
  return temp
}
const arr1 = [1, 2, 3, 4, 5]
const res1 = arr1.myFilter((a) => a > 2)
// console.log('myFilter', res1)

// Polyfill for reduce
Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i]
  }
  return acc
}
const arr2 = [1, 2, 3, 4, 5]
const res2 = arr2.myReduce((acc, a) => acc + a, 0)
// console.log('myReduce', res2)

// Polyfill for Memoize
const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2
}

const myMemoise = (fn, context) => {
  const cached = {}
  return function (...args) {
    var argsCached = JSON.stringify(args)
    if (!res[argsCached]) {
      res[argsCached] = fn.call(context || this, ...args)
    }
    return res[argsCached]
  }
}

const memoisedClumsyProduct = myMemoise(clumsyProduct)

console.time('First Call')
console.log(memoisedClumsyProduct(9467, 7649))
console.timeEnd('First Call')

console.time('Second Call')
console.log(memoisedClumsyProduct(9467, 7649))
console.timeEnd('Second Call')
