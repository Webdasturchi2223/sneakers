// header
let navLink = document.querySelectorAll('.sitenav__link')

function NavLinkHidden() {
    navLink.forEach(function (item) {
        item.classList.remove('sitenav__link-hidden')
    })
}

navLink.forEach(function (item, index) {
    item.addEventListener('click', function () {
        NavLinkHidden()
        item.classList.add('sitenav__link-hidden')
    })
})



// cart modal
let cart = document.querySelector('.header__cart-link')
let modal = document.querySelector('.header__cart-modal')

cart.addEventListener('click', function () {
    modal.classList.toggle('header__cart-modal--open')
})



// remove
let removeBTN = document.querySelector('.shopping-cart__bin')
let empty = document.querySelector('.shopping-cart__empty')
let product = document.querySelector('.shopping-cart__list')
let counter = document.querySelector('.cart__counter')

removeBTN.addEventListener('click', function () {
    product.classList.add('shopping-cart__list--none')
    empty.classList.add('shopping-cart__empty--block')
    counter.classList.add('cart__counter--none')
})



// sanash
let heroQUANTITY = document.querySelector('.hero__quantity')
let price = document.querySelector('.hero__price span')
let salePrice = document.querySelector('.hero__sale-price span')
let jsMINUS = document.querySelector('.js-minus')
let jsPLUS = document.querySelector('.js-plus')

jsMINUS.addEventListener('click', function () {
    if (heroQUANTITY.innerText > 0) {
        heroQUANTITY.innerText = heroQUANTITY.innerText - 1
        price.innerText = price.innerText - 125
        salePrice.innerText = salePrice.innerText - 250
    } else {
        heroQUANTITY.innerText = 0
    }
})

jsPLUS.addEventListener('click', function () {

    if (heroQUANTITY.innerText < 20) {
        heroQUANTITY.innerText = Number(heroQUANTITY.innerText) + 1
        price.innerText = Number(price.innerText) + 125
        salePrice.innerText = Number(salePrice.innerText) + 250
    } else {
        heroQUANTITY.innerText = 0
    }

})



// hero img
let jsIMGitem = document.querySelectorAll('.js-img')
let jsIMG = document.querySelectorAll('.js-img img')
let mainIMG = document.querySelector('.hero__main-img')

function ActiveRemove() {
    jsIMGitem.forEach(function (item) {
        item.classList.remove('hero__images--active')
    })
}

jsIMGitem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        mainIMG.src = jsIMG[index].src
        ActiveRemove()
        item.classList.add('hero__images--active')
    })
})


let a = 23;

if (a > 5) {
    console.log('salom');
} else {
    console.log('a 5 dan kichik');
}
