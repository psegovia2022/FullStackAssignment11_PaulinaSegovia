//STEP 1
// let myDate = new Date()
// myDate.setMonth(10)
// switch (myDate.getMonth()) {
//     case 0:
//         console.log('Jan has 31 days')
//         break
//     case 1:
//         console.log('Feb has 28 days')
//         break
//     case 2:
//         console.log('March has 31 days')
//         break
//     case 3:
//         console.log('April has 30 days')
//         break
//     case 4:
//         console.log('May has 31 days')
//         break
//     case 5:
//         console.log('June has 30 days')
//         break
//     case 6:
//         console.log('July has 31 days')
//         break
//     case 7:
//         console.log('August has 31 days')
//         break
//     case 8:
//         console.log('September has 30 days')
//         break
//     case 9:
//         console.log('October has 31 days')
//         break
//     case 10:
//         console.log('November has 30 days')
//         break
//     case 11:
//         console.log('December has 31 days')
//         break
// }

//STEP 2
// let myDate = new Date()
// myDate.setMonth(1)
// switch (myDate.getMonth()) {
//     case 0:
//         console.log('January')
//         break
//     case 1:
//         console.log('February')
//         break
//     case 2:
//         console.log('March')
//         break
//     case 3:
//         console.log('April')
//         break
//     case 4:
//         console.log('May')
//         break
//     case 5:
//         console.log('June')
//         break
//     case 6:
//         console.log('July')
//         break
//     case 7:
//         console.log('August')
//         break
//     case 8:
//         console.log('September')
//         break
//     case 9:
//         console.log('October')
//         break
//     case 10:
//         console.log('November')
//         break
//     case 11:
//         console.log('December')
//         break
// }

//STEP 3
// let myDate = new Date()
// if (myDate.getDay() === 0 || myDate.getDay() === 6) {
//     console.log('This day is a weekend.')
// } else {
//     console.log('This day is a week day.')
// }

//STEP 4
// let myDate = new Date()
// let day = ''
// myDate.setDate(myDate.getDate() - 1)

// switch (myDate.getDay()) {
//     case 0:
//         day = 'Sunday'
//         break
//     case 1:
//         day = 'Monday'
//         break
//     case 2:
//         day = 'Tuesday'
//         break
//     case 3:
//         day = 'Wednesday'
//         break
//     case 4:
//         day = 'Thursday'
//         break
//     case 5:
//         day = 'Friday'
//         break
//     case 6:
//         day = 'Saturday'
//         break
// }
// console.log(day)

//STEP 5
// let myDate = new Date()
// console.log(myDate.toDateString().slice(0, 1))