// const newDiv = document.createElement('div')
// console.log(newDiv)
// document.body.insertBefore(newDiv, document.querySelector('ul'))
// newDiv.innerHTML = '<h3>Awesome div content!</h3>'
// document.body.appendChild(newDiv)

// const newLi = document.createElement('li')
// newLi.innerText = 'Another list element'
// document.querySelector('ul').appendChild(newLi)
// document.querySelector('ul').innerHTML += 'New LI,'

const items = [
  "Adding to the DOM",
  "Querying the DOM",
  "Changing the DOM",
  "Event Listeners"
]

document.querySelector('ul').innerHTML = items.map(item => `<li>${item}</li>`).join('')


const h1 = document.querySelector('h1')

// h1.addEventListener('click', event => event.target.innerText += '!')

const ul = document.querySelector('ul')
const text = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', event => ul.innerHTML += `<li>${text.value}</li>`)
