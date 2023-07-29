// const button = document.querySelector('.btn')
// button. addEventListener('click', () => {

//     button.style.backgroundColor = 'red'
// })

const button = document.querySelector('.btn')
let btnRed = false

button. addEventListener('click', () => {
if(btnRed) {
    button.style.backgroundColor = 'blue'
    btnRed = false
} else {
    button.style.backgroundColor = 'red'
    btnRed = true
}
})

function scrolling() {

    console.log('scroll')
}


document.addEventListener('scroll', scrolling)