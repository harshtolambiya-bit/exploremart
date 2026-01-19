let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';
    let sum = 0;
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
        sum += item.price;
    });
    total.textContent = sum.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function checkout() {
    alert('Checkout functionality not implemented. In a real site, integrate payment gateway.');
}

if (document.getElementById('cart-items')) {
    displayCart();
}