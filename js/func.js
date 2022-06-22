let cards = [{
    img: 'plate.jpg',
    desc: 'Decor Plate',
    price: 65
},
{
    img: 'vaswjpg.jpg',
    desc: 'Mint Pottery',
    price: 60
},
{
    img: 'set.jpg',
    desc: 'Set Of Potterys',
    price: 63
},
{
    img: 'orange.jpg',
    desc: 'Orange Ceramic',
    price: 60
},
{
    img: 'bowl.jpg',
    desc: 'Dark Bowl',
    price: 50
},
{
    img: 'square.jpg',
    desc: 'Square Pottery',
    price: 67
}]

function createCards(amount){
    const storeItems = document.querySelector('#store__items')
    storeItems.innerHTML = ''
    for(let i = 0; i < amount; i++ ){
        let item = document.createElement('div')
        item.classList.add('store__item')
        item.innerHTML = `
                    <img src="img/${cards[i].img}" alt="" class="store__item-img">
                    <p class="store__item-desc">${cards[i].desc}</p>
                    <p class="store__item-price">$ ${cards[i].price} USD</p>`
        storeItems.appendChild(item)
    }
}

export default createCards