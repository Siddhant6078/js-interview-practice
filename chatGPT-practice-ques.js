// 1. Find the largest and smallest element in an array
const largestSmallestInArray = (arr) => {
  const result = {
    smallest: arr[0],
    largest: arr[0]
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result.largest) {
      result.largest = arr[i]
    }
    if (arr[i] < result.smallest) {
      result.smallest = arr[i]
    }
  }
  return result
}
// const arr = [-10, 2, 10, 30, -5]
const arr = [-10, -10, -15]
console.log('Smallest and Largest in an Array: ', largestSmallestInArray(arr))

// 2. Reverse an array
const reverseArray = (arr) => {
  const reverse = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i])
  }
  return reverse
}
const arr1 = [1, 4, 2, 5, 3, 7, 6]
console.log('Reverse Array: ', reverseArray(arr1))

// 3. Check if an array is sorted
const isSortedArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}
const arr2 = [1, 2, 3, 4, 5]
console.log('Check array is sorted: ', isSortedArray(arr2))

// 4. Count the number of even and odd elements
const countEvenOddInArray = (arr) => {
  const result = {
    even: 0,
    odd: 0
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.even += 1
    } else {
      result.odd += 1
    }
  }
  return result
}
console.log('Count even and odd in an Array', countEvenOddInArray(arr2))

// 5. Find the sum and average of array elements
const sumAndAverageInArray = (arr) => {
  const result = {
    sum: 0,
    average: 0
  }
  for (let i = 0; i < arr.length; i++) {
    result.sum += arr[i]
  }
  result.average = result.sum / arr.length
  return result
}
console.log('Sum and Average: ', sumAndAverageInArray(arr2))

// 6. Remove duplicate elements from an array
const removeDuplicates = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}
const arr3 = [1, 3, 1, 4, 2, 4, 5, 3, 2]
console.log('Remove Duplicates: ', removeDuplicates(arr3))

// 7. Find the second largest element
const secondLargest = (arr) => {
  let largest = -Infinity
  let secondLargest = -Infinity

  if (arr.length < 2) {
    return 'Array should have at least 2 elements'
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    } else if (num !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i]
    }
  }

  if (secondLargest === -Infinity) {
    return 'No distinct second largest value'
  }
  return { largest, secondLargest }
}
console.log('Second Largest: ', secondLargest(arr2))

// 8. Rotate an array by k positions (left/right)
