import './styles.css'

const root = document.getElementById('root')!

const hello = document.createElement('h1')
hello.classList.add('hello')
hello.innerText = 'Hello Frontend Squid'

root.appendChild(hello)
