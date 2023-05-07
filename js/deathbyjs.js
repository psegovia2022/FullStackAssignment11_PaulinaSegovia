//STEP 1
// function alphabetize(x) {
//     return x.split('').sort().join('')
// }
// console.log(alphabetize('webmaster'))

//STEP 2
// function capitalize(sentence) {
//     let strArray
//     let cappedStringArray = []
//     let cappedString

//     strArray = sentence.split(' ')
//     for (let word in strArray) {
//         cappedStringArray.push(strArray[word].replace(strArray[word].charAt(0), strArray[word].charAt(0).toUpperCase()))
//     }
//     cappedString = cappedStringArray.join(' ')
//     return cappedString
// }
// console.log(capitalize('the quick brown fox jumps over the lazy dog'))

//STEP 3
// function vowels(sentence) {
//     let matches
//     let count

//     matches = sentence.match(/[aeiou]/gi)
//     count = matches ? matches.length : 0
//     return `${sentence} contains ${count} vowels`
// }
// console.log(vowels('the quick brown fox jumps over the lazy dog'))

//STEP 4
// function generatePassword(pass) {
//     return Math.random().toString(36).substring(2, pass)
// }
// console.log(generatePassword(10))

//STEP 5
// function getLongestName(countries) {
//     let i
//     let longestCountry = 0
//     let indexOfLongest = 0

//     for (i = 0; i < countries.length; i++) {
//         if (countries[i].length > longestCountry) {
//             longestCountry = countries[i].length
//             indexOfLongest = i
//         }
//     }
//     return countries[indexOfLongest]
// }
// console.log(`The longest country is: ${getLongestName(["Australia", "Great Britain", "Ukraine", "Chile", "Mexico"])}`)