// const element = document.querySelector('.block')

// element.textContent = 'testtext'

// element.id = '123'
// element.style.color = 'blue'
// element.style.fontSize = '30px'

// console.log(element.textContent)

const elements = document.querySelectorAll('div')
// console.log(elements[1])
elements.forEach((element) => {
    element.style.color = 'orange'
    console.log(element)
})