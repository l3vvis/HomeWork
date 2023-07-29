// // const arr = [1,2,3,4]
// // arr.push(5)
// // console.log(arr.length)

// const users = [
//     {
//         name: 'Max',
//         age: 35
//     },
//     { 
//         name: 'wefwef',
//         age: 104
//     },
//     {
//         name: 'wef',
//         age: 113
//     }
// ]

// users.forEach((user) => {
//     console.log(user)
// })

// const usersName = []

// users.forEach((user) => {
//     usersName.push(user.name)
// })
// console.log(usersName)

// ================
// var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

// console.log(myFish); // ['ангел', 'клоун', 'мандарин', 'хирург']

// var popped = myFish.pop();

// console.log(myFish); // ['ангел', 'клоун', 'мандарин']

// console.log(popped); // 'хирург'

// ====================
// var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

// console.log('myFish до: ' + myFish);
// //myFish до: ангел,клоун,мандарин,хирург

// var shifted = myFish.shift();

// console.log('myFish после: ' + myFish);
// //myFish после: клоун,мандарин,хирург

// console.log('Удалён этот элемент: ' + shifted);
// //Удалён этот элемент: ангел
// ======================
var arr = [1, 2];

arr.unshift(0); // результат вызова равен 3, новой длине массива
// arr равен [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr равен [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr равен[[-3], -2, -1, 0, 1, 2]


