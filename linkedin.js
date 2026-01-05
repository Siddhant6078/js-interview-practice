// 1. Reverse a String
// 2. Check if a String is a Palindrome
// 3. Remove Duplicates from a String
const removeDuplicates = (str) => {
  const uniqueChars = new Set(str)
  const uniqueCharsArray = [...uniqueChars]
  return uniqueCharsArray.join('')
}
console.log('removeDuplicates', removeDuplicates('Hi, I am Siddhant Chaudhari'))

// 4. Find the First Non-Repeating Character
// Input: "geeksforgeeks" Output: 'f'
// Explanation: In this string, 'g', 'e', 'k', and 's' all repeat. 'f' is the first character in the string that does not repeat.
const firstNonRepeatingChar = (str) => {
  const charCounts = {}
  const len = str.length
  for (let char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1
  }
  for (let char of str) {
    if (charCounts[char] === 1) {
      return char
    }
  }
  return null
}
console.log('firstNonRepeatingChar', firstNonRepeatingChar('aabbccc'))

// 5. Count the Occurrences of Each Character
const countOccurrencesOfChar = (str) => {
  const charCounts = {}

  for (let char of str) {
    const lowerCaseChar = char.toLowerCase()
    charCounts[lowerCaseChar] = (charCounts[lowerCaseChar] || 0) + 1
  }
  return charCounts
}
console.log('countOccurrencesOfChar', countOccurrencesOfChar('GeekSforgeeks'))

// 6. Reverse Words in a Sentence
// Input: "the sky is blue" Output: "blue is sky the"
const reverseWords = (str) => {
  return str.split(' ').reverse().join(' ')
}
console.log('reverseWords', reverseWords('the sky is blue'))

// 7. Check if Two Strings are Anagrams
// Input: s1 = “geeks” s2 = “kseeg” Output: true.
const checkAnagrams = (str1, str2) => {
  const normalize = (str) => str.toLowerCase().replace(/^a-z0-9/g, '')
  const normalizedStr1 = normalize(str1)
  const normalizedStr2 = normalize(str2)

  if (normalizedStr1.length !== normalizedStr2.length) {
    return false
  }

  const sortedStr1 = normalizedStr1.split('').sort().join('')
  const sortedStr2 = normalizedStr2.split('').sort().join('')

  return sortedStr1 === sortedStr2
}
console.log('checkAnagrams', checkAnagrams('Hello', 'world'))

// 8. Find the Longest Substring Without Repeating Characters
// 9. Convert a String to an Integer (atoi Implementation)
// 10. Compress a String (Run-Length Encoding)
// 11. Find the Most Frequent Character
// 12. Find All Substrings of a Given String
// 13. Check if a String is a Rotation of Another String
// 14. Remove All White Spaces from a String
// 15. Check if a String is a Valid Shuffle of Two Strings
// 16. Convert a String to Title Case
// 17. Find the Longest Common Prefix
// 18. Convert a String to a Character Array
// 19. Replace Spaces with %20 (URL Encoding)
// 20. Convert a Sentence into an Acronym
// 21. Check if a String Contains Only Digits
// 22. Find the Number of Words in a String
// 23. Remove a Given Character from a String
// 24. Find the Shortest Word in a String
// 25. Find the Longest Palindromic Substring
// 26. Count Vowels and Consonants
const countVowelsConsonants = (str) => {
  let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)
  let vowels = str.match(/[aeiou]/gi)
  return `Vowels: ${vowels.length}, Consonants: ${consonants.length}`
}
console.log(
  'countVowelsConsonants',
  countVowelsConsonants('Hi, I am Siddhant Chaudhari')
)

// Calculate in-hand salary
const calculateInHandSalary = (
  ctc,
  basicPercent,
  minBasic = false,
  noGratuity = false
) => {
  const salary = {}
  const monthlySalary = ctc / 12

  // Basic Salary
  salary.basic = Math.round((basicPercent / 100) * monthlySalary)
  // salary.basic = 874800 / 12

  // HRA - Usually 40-50% of basic
  salary.hra = 0.5 * salary.basic

  // Provident Fund (12% of Basic)
  salary.employerPf = minBasic ? 15000 * 0.12 : Math.round(0.12 * salary.basic)
  salary.employeePf = minBasic ? 15000 * 0.12 : Math.round(0.12 * salary.basic)

  salary.tax = Math.round(
    (((ctc - salary.employerPf * 12 - 2475000) * 0.3 + 300000) * 1.04) / 12
  )

  salary.pf = salary.employeePf + salary.employerPf
  salary.pt = 200
  // Gratuity (4.81% of Basic)
  salary.gratuity = noGratuity ? 0 : Math.round(0.0481 * salary.basic)

  // Other Allowances (Remaining from CTC)
  const fixedComponents =
    salary.basic + salary.hra + salary.pf + salary.gratuity
  salary.otherAllowances = ctc - fixedComponents

  // In-hand salary (excluding PF & Gratuity)
  salary.inHand =
    monthlySalary - (salary.pf + salary.gratuity + salary.pt + salary.tax) // Approximation

  return salary
}

const ctc = 3000000 // 10 LPA
const basicPercent = 40

console.log(calculateInHandSalary(ctc, basicPercent, false, true))
