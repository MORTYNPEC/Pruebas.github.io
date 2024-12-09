// car.js

// Función para mostrar los productos en la página
function mostrarProductos() {
  const productsList = document.getElementById('products-list');

  // Limpiamos la lista antes de agregar los productos
  productsList.innerHTML = '';

  arreglo_productos.forEach(producto => {
    // Calcular el total
    const total = producto.precio * producto.cantidad;

    // Crear el HTML de cada producto
    const productoHTML = `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
        <div class="producto-info">
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
          <p>Total: $${total}</p>
        </div>
      </div>
    `;

    // Agregar el producto a la lista
    productsList.innerHTML += productoHTML;
  });
}

// Llamar a la función para mostrar los productos al cargar la página
window.onload = mostrarProductos;
