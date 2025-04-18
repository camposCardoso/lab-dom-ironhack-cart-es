// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.textContent);
  const quantityValue = parseInt(quantity.value);

  const subtotalValue = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalValue.toFixed(2);

  return subtotalValue;
}

function calculateAll() {

  const allProducts = document.querySelectorAll('.product');

  // Paso 2: Inicializar total
  let total = 0;

  // Paso 3: Recorrer cada producto, calcular su subtotal y sumarlo al total
  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });

  // Paso 4: Actualizar el total en el DOM
  const totalValue = document.querySelector('#total-value span');
  totalValue.textContent = total.toFixed(2);

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test



  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

   // 1. Ir dos niveles arriba en el DOM para obtener la fila del producto
   const productRow = target.parentNode.parentNode;

    // 2. Eliminar esa fila del tbody
  const parent = productRow.parentNode;
  parent.removeChild(productRow);

  // 3. Recalcular el total
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});
