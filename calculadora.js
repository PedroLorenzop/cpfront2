const addCart = document.getElementsByClassName("botao-compra");
let productCount = 0;
let cartValue = 0;

const productPrices = {
  '1': 35.00,
  '2': 50.00,
  '3': 80.00,
  'vinho1': 119.00,
  'vinho2': 208.00,
  'vinho3': 154.00,
};

const addCart2 = document.getElementsByClassName("botao-compra");

for (var i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', addProduct);
}

function addProduct(event) {
    const productName = event.target.getAttribute('data-product');
    const productPrice = productPrices[productName];
    if (productPrice != null) {
        productCount++;
        cartValue += productPrice;
        alert(`Produto ${productName} de valor R$${productPrice} adicionado ao carrinho! Total de produtos: ${productCount}. Valor total do carrinho: R$${cartValue}`);
        const cartItems = document.getElementById('cart-items');
        const newItem = document.createElement('li');
        newItem.textContent = `${productName}: R$${productPrice}`;
        cartItems.appendChild(newItem);
        const cartTotal = document.getElementById('cart-total');
        cartTotal.textContent = `Total: R$${(cartValue)}`;
    } else {
        alert("O nome do produto inserido é inválido.");
    }
 }
    
    
       
const removeFromCartButtons = document.querySelectorAll(".botao-remover");
removeFromCartButtons.forEach(button => {
  button.addEventListener('click', removeProduct);
});
function removeProduct(event) {
    const productName = event.target.getAttribute('data-product');
    const productPrice = productPrices[productName];
    if (productCount > 0 && productPrice != null && productPrice <= cartValue) {
        productCount--;
        cartValue -= productPrice;
        alert(`Produto ${productName} de valor R$${productPrice} removido do carrinho! Total de produtos: ${productCount}. Valor total do carrinho: R$${cartValue}`);
        const cartItems = document.getElementById('cart-items');
        for (let i = 0; i < cartItems.children.length; i++) {
            if (cartItems.children[i].textContent.startsWith(`${productName}:`)) {
                cartItems.removeChild(cartItems.children[i]);
                break;
            }
        }
        const cartTotal = document.getElementById('cart-total');
        cartTotal.textContent = `Total: R$${cartValue}`;
    } else {
        alert("O nome do produto inserido é inválido ou o valor do produto é maior que o valor total do carrinho.");
    }
}

const applyCouponButton = document.getElementById('botao-desconto');
applyCouponButton.addEventListener('click', applyCoupon);

function applyCoupon() {
    const coupon = document.getElementById('cupom').value;
    if (coupon === 'FIAP2024') {
        cartValue = cartValue * 0.9; // Aplica um desconto de 10%
        alert(`Cupom aplicado, desconto de 10%! O novo valor total do carrinho é: R$${cartValue.toFixed(2)}`);
        const cartTotal = document.getElementById('cart-total');
        cartTotal.textContent = `Total: R$${cartValue.toFixed(2)}`;
    } else {
        alert("Cupom inválido.");
    }
}
