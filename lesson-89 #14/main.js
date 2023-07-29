// const btn = document.querySelector('.btn')
// const text = document.querySelector('.text')

// btn.addEventListener('click', () => {
//     text.classList.toggle('move')
//     text.classList.remove('red')

// })


const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

btn.addEventListener('click', () => {
    if (text.classList.contains('move')) {
        text.textContent = 'пошли дуижения'
    } else {
        text.innerText = 'Текст'
    }
})

console.log(text.classList)