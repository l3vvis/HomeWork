// const users = ['John', 'Ann', 'Alex', 'Max']
// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     retutn `There is no such item in the array`
// }
// console.log(checkForCopyItem(users, 'Alex'))


// ==================================================
// ==================================================

// function greeter(name){
//     return `Hello, ${'Jhonny'}`
// }
// console.log(greeter())


// ==================================================
// ==================================================


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// function checkNumbers(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= number) {
//             console.log(`Число больше 10 -  ${array[i]}`)
//         }
//     }
// }
// checkNumbers(numbers, 11)





// ==================================================
// ==================================================

function calcNumb(firstNumber, secondNumber) {
    if (firstNumber + secondNumber)
        return firstNumber + secondNumber;
    if (firstNumber - secondNumber)
        return firstNumber - secondNumber;
    if (firstNumber * secondNumber)
        return firstNumber * secondNumber;
    if (firstNumber / secondNumber)
        return firstNumber / secondNumber;
}
console.log(calcNumb(10 * 4))