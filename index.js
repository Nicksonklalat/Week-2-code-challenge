// Add items to shop
document.getElementById('addItem').addEventListener('click', function () {
    // Get value of the input field
    let newItem = document.getElementById('newItem').value.trim();
    if (newItem !== '') {
      let li = document.createElement('li');
      li.textContent = newItem;
      li.addEventListener('click', function () {
        li.classList.toggle('selected');
      });
      document.getElementById('cartItems').appendChild(li);
      document.getElementById('newItem').value = '';
    } else {
      alert('Please add cart items.');
    }
  });
  
  // Mark selected items as purchased
  document.getElementById('markPurchased').addEventListener('click', function () {
    let selectedItems = document.querySelectorAll('#cartItems li.selected');
    selectedItems.forEach((item) => {
      item.classList.remove('selected');
      item.classList.add('purchased');
    });
  });
  
  // Clear cart list items
  document.getElementById('clearList').addEventListener('click', function () {
    // Get the cart list element
    let cartItems = document.getElementById('cartItems');
  
    // Check if the list has any children
    let hasChildren = cartItems.firstChild !== null;
  
    // Remove all items of the cart list
    while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
    }
  
    // Print this error if there's no item to be cleared
    if (!hasChildren) {
      alert('Cart is empty');
    }
  });
  