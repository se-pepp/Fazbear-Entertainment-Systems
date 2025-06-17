let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}


function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price}
      <br>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = total.toFixed(2);
}

function toggleCart() {
  const panel = document.getElementById('cart-panel');
  panel.classList.toggle('open');
}

function checkoutCart() {
 alert('Checkout not implemented. This is a demo!');
}
