import helloWorld from './hello-world'
import imgSrc from './assets/bear.png'
import logoSvg from './assets/Shape.svg'
import exampleText from './assets/example.txt'
import jpgMap from './assets/diyEgg.jpg'
import './style.css'
import './style.less'

helloWorld()
const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.src = logoSvg
img2.style.cssText = 'width: 600px; height: 200px'
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
block.classList.add('block-bg')
block.textContent = exampleText
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.style.cssText = 'width: 400px; height: 400px; display: block'
img3.src = jpgMap
document.body.appendChild(img3)

document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
span.innerHTML = '&#xe639;'
document.body.appendChild(span)