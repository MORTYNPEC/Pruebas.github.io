// loadProducts.js

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");
  
    // Verifica si el arreglo de productos existe
    if (!Array.isArray(products)) {
      console.error("El arreglo de productos no se ha cargado correctamente.");
      return;
    }
  
    // Recorre los productos y crea los elementos HTML
    products.forEach(product => {
      const productCard = `
        <div class="col-md-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <p class="card-text">Cantidad: ${product.quantity}</p>
            </div>
          </div>
        </div>
      `;
      productsContainer.innerHTML += productCard;
    });
  });
  