document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const clearCart = document.getElementById('clear-cart');
  const finalizePurchase = document.getElementById('finalize-purchase');  
  function updateCart() {
    cartItemsContainer.innerHTML = ''; 
    let total = 0;
    
    cart.forEach((product) => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${product.name} - ${product.quantity} x $${product.price} = $${product.total}`;
      cartItemsContainer.appendChild(cartItem);
      total += product.total;
    });
  
    cartTotal.trxtContent = `${total.toFixed(2)}`;

  }

updateCart();

  clearCart.addEventListener('click', () => {
    cartItemsContainer.innerHTML = '';
    cartTotal.textContent = '$0.00';
    cart = [];  
    localStorage.removeItem('cart');
  });

  finalizePurchase.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('No tienes productos en el carrito');
      return;
    }

    alert('¡Compra exitosa! Gracias por tu compra.');
    
    cartItemsContainer.innerHTML = '';
    cartTotal.textContent = '$0.00';
    cart = []; 
    localStorage.removeItem('cart');  
    
  });
});
