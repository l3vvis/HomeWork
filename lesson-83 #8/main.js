// const user = {
//     name: 'Jhonny',
//     age: 24,
//     isAdmin: true
// }

// console.log(user.name, user.age)

// const users = {
//     Jhonny: {
//         age: 24,
//         isAdmin: true
//     },
//     Mike: {
//         age: 20,
//         isAdmin: false,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.Jhonny.isAdmin)
// console.log(users.Mike.isAdmin)
// users.Mike.sayHello('Dan')

// const users = [
//     {
//         name: 'misha',
//         age: 22,
//         isAdmin: false
//     },
//     {
//         name: 'dasha',
//         age: 72,
//         isAdmin: true
//     }
// ]

// users.push({
//     name: 'don',
//     age: 44,
//     isAdmin: false
// })

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// const foo = 'hello world'
// console.log(foo.toUpperCase())

// ================================================================================
// ================================================================================



// ============================= 1 ==========================

const user = [ 
    { 
    name: 'lemming',
    age: 24,
    status: 'married',
    married: true,
    petNickName: 'Persik'
},
]
console.log(user.name, user.age, user.status, user.married, user.petNickName)


const arr = [
    {
        sayHello(name) {
            console.log(`Hello, ${name}`)
        }
    }
]
// arr.sayHello('John')
console.log(arr.sayHello('John'))


    // ============================= 3 ==========================
// const users = [
//     {
//         name: 'JohnnyCage',
//         isAdmin: false
//     },
//     {
//         name: 'JaneAir',
//         isAdmin: false
//     },
//     {
//         name: 'GarryPotter',
//         isAdmin: false
//     },
//     {
//         name: 'SarahOConnor',
//         isAdmin: true
//     }
// ];

// let simpleUsersCount = 0
// for (let i = 0; i < users.length; i++) {
//     if (!users[i].isAdmin) {
//         simpleUsersCount++
//     }
// }

// console.log("Количество простых пользователей: " + simpleUsersCount)