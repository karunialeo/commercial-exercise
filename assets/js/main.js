const sneakersPrice = '125.00'

const iconCart = document.getElementById("icon-cart");
const cartBox = document.getElementById("cart-box-container");
const cartStatus = document.getElementById("cart-status");

function toggleCartShow() {
    cartBox.classList.toggle("dis-none");
}

iconCart.addEventListener("click", function () {
    toggleCartShow()
});

const quantityInput = document.querySelector('.prod-quantity-input')
const minButton = document.getElementById('min-button')
const plusButton = document.getElementById('plus-button')

function addToCart() {
    if(quantityInput.value != 0) {
        if (cartBox.classList.contains('dis-none')) {
            toggleCartShow()
        }
        cartStatus.innerHTML = `
            <div class="prod-cart-container">
                <div class="prod-cart-details">
                    <div class="prod-cart-image">
                        <img src="assets/img/image-product-1-thumbnail.jpg" alt="img-prod-1-thumb" />
                    </div>
                    <div class="prod-cart-price">
                        <p>Fall Limited Edition Sneakers</p>
                        <p>\$${sneakersPrice} x ${quantityInput.value} <span class="bold black">\$${sneakersPrice * quantityInput.value}.00</span></p>
                    </div>
                    <div class="cart-trash-icon" id="remove-from-cart">
                        <img src="assets/img/icon-delete.svg" alt="" />
                    </div>
                </div>
                <div class="cart-checkout">
                    <button class="white">Checkout</button>
                </div>
            </div>
        `
    } else {
        cartStatus.innerHTML = `
            <div class="cart-empty-container">
                <p>Your cart is empty.</p>
            </div>
            `
    }

    const removeFromCart = document.getElementById('remove-from-cart')
    
    removeFromCart.addEventListener("click", function() {
        cartStatus.innerHTML = `
            <div class="cart-empty-container">
                <p>Your cart is empty.</p>
            </div>
            `
    })
}


function minQ() {
    if(quantityInput.value > 0) {
        quantityInput.value--
    }
}

function plusQ() {
    quantityInput.value++
}

const modalContainer = document.getElementById("modal-container")
const heroImage = document.getElementById("prod-hero-image")
const closeButton = document.getElementById("close-button")
const imgNav = document.querySelector('.image-navigator')

heroImage.addEventListener("click", function () {
    if (window.innerWidth > 768) {
        modalContainer.classList.toggle("dis-none");
        modalContainer.classList.toggle("dis-flex");
    }
});

closeButton.addEventListener("click", function () {
    modalContainer.classList.toggle("dis-flex");
    modalContainer.classList.toggle("dis-none");
});

const heroMain = heroImage.querySelector('.hero-main')
const navLeft = heroImage.querySelector('.navigate-left')
const navRight = heroImage.querySelector('.navigate-right')

const navModLeft = modalContainer.querySelector('.navigate-left')
const navModRight = modalContainer.querySelector('.navigate-right')
const modalImage = modalContainer.querySelector('.modal-hero-image')

function navigator() {
    let i = 1
    navLeft.addEventListener('click', () => {
        if(i > 1 && i <= 4) {
            i--
            heroMain.innerHTML = `<img src="assets/img/image-product-${i}.jpg" alt="image-prod-${i}" />`
        } else if(i == 1) {
            i = 4
            heroMain.innerHTML = `<img src="assets/img/image-product-${i}.jpg" alt="image-prod-${i}" />`
        }
    })
    
    navRight.addEventListener('click', () => {
        if(i >= 1 && i < 4) {
            i++
            heroMain.innerHTML = `<img src="assets/img/image-product-${i}.jpg" alt="image-prod-${i}" />`
        } else if(i == 4) {
            i = 1
            heroMain.innerHTML = `<img src="assets/img/image-product-${i}.jpg" alt="image-prod-${i}" />`
        }
    })
}

function modalNavigator() {
    let i = 1  
    navModLeft.addEventListener('click', () => {
        if(i > 1 && i <= 4) {
            i--
            modalImage.innerHTML = `<img src="assets/img/image-product-${i}.jpg" alt="image-prod-${i}" />`
        } else if(i == 1) {
            i = 4
            modalImage.innerHTML = `<img src="assets/img/image-product-${i}.jpg" alt="image-prod-${i}" />`
        }
    })
    
    navModRight.addEventListener('click', () => {
        if(i >= 1 && i < 4) {
            i++
            modalImage.innerHTML = `<img src="assets/img/image-product-${i}.jpg" alt="image-prod-${i}" />`
        } else if(i == 4) {
            i = 1
            modalImage.innerHTML = `<img src="assets/img/image-product-${i}.jpg" alt="image-prod-${i}" />`
        }
    })
}

navigator()
modalNavigator()