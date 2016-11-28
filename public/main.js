const SPEED = 2

const caterpillar = () => {
  const main = document.querySelector('.caterpillar')
  const newImg = document.createElement('img')
  newImg.src = '/images/caterpillar.svg'
  newImg.style.right = Math.floor(Math.random() * document.body.clientWidth) + 'px'
  newImg.style.bottom = Math.floor(Math.random() * 45) + 'px'
  main.appendChild(newImg)
}

const animate = () => {
  const main = document.querySelector('.caterpillar')
  for (let newImg of main.children) {
    const xAxis = Number(newImg.style.right.split('px')[0])
    const yAxis = Number(newImg.style.bottom.split('px')[0])
    const mod = xAxis % 3
    if (yAxis < document.body.clientWidth) {
      newImg.style.bottom = (yAxis + SPEED + mod) + 'px'
      console.log(Math.random())
    } else {
      main.removeChild(newImg)
      butterfly()
    }
  }
}

const butterfly = () => {
  const main = document.querySelector('.butterfly')
  const newImg = document.createElement('img')
  newImg.src = '/images/butterfly.png'
  newImg.style.bottom = Math.floor(Math.random() * document.body.clientHeight) + 'px'
  newImg.style.left = Math.floor(Math.random() * 45) + 'px'
  main.appendChild(newImg)
}

const Banimate = () => {
  const main = document.querySelector('.butterfly')
  for (let newImg of main.children) {
    const xAxis = Number(newImg.style.bottom.split('px')[0])
    const yAxis = Number(newImg.style.left.split('px')[0])
    const mod = xAxis % 3
    if (yAxis < document.body.clientWidth) {
      newImg.style.left = (yAxis + SPEED + mod) + 'px'
      console.log(newImg.style.left)
    } else {
      main.removeChild(newImg)
      caterpillar()
    }
  }
}

const main = () => {
  const button = document.querySelector('button')
  button.addEventListener('click', (event) => {
    // event.preventDefault()
    caterpillar()
  })

  window.setInterval(animate, 10)
  window.setInterval(Banimate, 10)
}

document.addEventListener('DOMContentLoaded', main)
