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

const modalContainer = document.getElementById("modal-container");
const heroImage = document.getElementById("prod-hero-image");
const closeButton = document.getElementById("close-button");

heroImage.addEventListener("click", function () {
    modalContainer.classList.toggle("dis-none");
    modalContainer.classList.toggle("dis-flex");
});

closeButton.addEventListener("click", function () {
    modalContainer.classList.toggle("dis-flex");
    modalContainer.classList.toggle("dis-none");
});

