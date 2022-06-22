import createCards from './func.js'

const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')
const body = document.querySelector('body')

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
})
menu.addEventListener('click', (e) => {
    if(e.target.closest('.menu__item')){
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
    }
})


if(window.innerWidth < 640){
    createCards(3) 
} else {
    createCards(6)
}

window.addEventListener('resize', ()=>{
    console.log(window.innerWidth)
    if(window.innerWidth < 640){
        createCards(3) 
    } else {
        createCards(6)
    }
})


