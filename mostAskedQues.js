// ----------------------- Basics, Strings, Arrays --------------------------

// 1. Reverse a String
const reverseString = (str) => {
  return str.split('').reverse().join('')
}
console.log('reverseString', reverseString('Hello'))

// 2. Check if a String is a Palindrome
const palindrome = (str) => {
  return str === str.toLowerCase().split('').reverse().join('')
}
console.log('palindrome', palindrome('nitin'))

// 3. Count Vowels in a String
const countVowels = (str) => {
  let count = 0
  str.split('').forEach((item) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(item.toLowerCase())) {
      count += 1
    }
  })
  return count
}
console.log('countVowels', countVowels('Eello'))

// 4. Find the Longest Word in a Sentence
const longestWord = (str) => {
  const arr = str.split(' ')
  let longest = arr[0]
  arr.forEach((item) => {
    if (item.length > longest.length) {
      longest = item
    }
  })
  return longest
}
console.log('longestWord', longestWord('I am Siddhant Cool'))

// 5. Capitalize the First Letter of Each Word
const capitalizeFirstLetter = (str) => {
  return str
    .split(' ')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
}
console.log(
  'capitalizeFirstLetter',
  capitalizeFirstLetter('i am siddhant cool')
)

// 6. Repeat a String N Times
const repeatString = (str, num) => {
  if (num <= 0) return ''
  return str.repeat(num)
}
console.log('repeatString', repeatString('Sid', 5))

// 7. Truncate a String with Ellipsis
const truncateStr = (str, maxLen) => {
  if (str.length > maxLen) {
    return str.slice(0, maxLen) + '...'
  } else {
    return str
  }
}
console.log(
  'truncateStr',
  truncateStr('The quick brown fox jumps over the lazy dog', 20)
)

// 8. Find the Largest Number in an Array
const largestNumInArr = (arr) => {
  return Math.max(...arr)
}
console.log(
  'largestNumInArr',
  largestNumInArr([1, 5, 2, 78, 25, 99, 136, 3, 7])
)

// 9. Sum All Numbers in an Array
const sumOfArrElements = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0)
}
console.log(
  'sumOfArrElements',
  sumOfArrElements([1, 5, 2, 78, 25, 99, 136, 3, 7])
)

// 10. Check if Array Contains an Element
const checkElementInArray = (arr, ele) => {
  return arr.includes(ele)
}
console.log(
  'checkElementInArray',
  checkElementInArray([1, 5, 2, 78, 25, 99, 136, 3, 7], 99)
)

// 11. Filter Out Falsy Values (false, 0, "", null, undefined, NaN)
const filterFalsyValues = (arr) => {
  const falsyValueArr = [false, 0, '', null, undefined, NaN]
  return arr.filter((a) => !falsyValueArr.includes(a))
}
console.log(
  'filterFalsyValues',
  filterFalsyValues([
    1,
    5.98,
    false,
    78,
    '',
    99,
    '136',
    null,
    7,
    87,
    undefined,
    'Hello',
    NaN
  ])
)

// 12. Get Even Numbers from an Array
const getEvenNum = (arr) => {
  return arr.filter((a) => a % 2 === 0)
}
console.log('getEvenNum', getEvenNum([1, 5, 2, 78, 25, 99, 136, 3, 7]))

// 13. Return Factorial of a Number
const factorial = (num) => {
  let fact = 1
  for (let i = num; i > 0; i--) {
    fact = fact * i
  }
  return fact
}
console.log('factorial', factorial(4))

// 14. Generate Fibonacci Sequence
const fibonacci = (num) => {
  let n1 = 0,
    n2 = 1,
    nextTerm
  for (let i = 1; i <= num; i++) {
    console.log(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
  }
}
console.log('fibonacci', fibonacci(10))

// 15. Print Numbers 1 to 100 (FizzBuzz)
const printNumFizzBuzz = () => {
  let str = ''
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      str += 'FizzBuzz' + ','
    } else if (i % 3 === 0) {
      str += 'Fizz' + ','
    } else if (i % 5 === 0) {
      str += 'Buzz' + ','
    } else {
      str += i + ','
    }
  }
  return str
}
console.log('printNumFizzBuzz', printNumFizzBuzz())

// ----------------------- Intermediate: Logic, Loops, Array/Object Operations --------------------------

// 16. Check if a Number is Prime
const isPrime = (num) => {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
console.log('isPrime', isPrime(2))

// 17. Find All Prime Numbers up to N
const primeNum = (num) => {
  const primeNumArr = []
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primeNumArr.push(i)
    }
  }
  return primeNumArr
}
console.log('primeNum', primeNum(10))

// 18. Remove Duplicates from Array
const removeDuplicates = (arr) => {
  return new Set(arr)
}
const removeDuplicatesRaw = (arr) => {
  return arr.filter((item, index, self) => {
    return self.indexOf(item) === index
  })
}
console.log(
  'removeDuplicates',
  removeDuplicates([1, 2, 1, 2, 1, 1, 3, 6, 4, 4, 2, 4, 3, 5, 9, 7, 6, 7, 8]),
  removeDuplicatesRaw([1, 2, 1, 2, 1, 1, 3, 6, 3, 5, 9, 7, 6, 7, 8])
)

// 19. Find the Second Largest Number in Array
const secondLargest = (arr) => {
  if (arr.length < 2) {
    return 'Array must have at least 2 elements'
  }
  let largestNum = -Infinity,
    secondLargestNum = -Infinity
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i]
    if (currNum > largestNum) {
      secondLargestNum = largestNum
      largestNum = currNum
    } else if (currNum > secondLargestNum && currNum < largestNum) {
      secondLargestNum = currNum
    }
  }
  if (secondLargestNum === -Infinity) {
    return 'No distinct second largest element found'
  }
  return secondLargestNum
}
console.log('secondLargest', secondLargest([13, 45, 23, 87, 67, 45, 99, 99]))

// 20. Sort an Array Without Using .sort() - Bubble Sort
const sortArr = (arr) => {
  const n = arr.length - 1
  let swapped
  do {
    swapped = false
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}
console.log('sortArr', sortArr([1, 15, 8, 12, 9]))

// 21. Check if Two Strings are Anagrams
