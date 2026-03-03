// variables
const carrito = document.querySelector('#carrito');
const shopcar = document.querySelector('lista-carrito tbody');
const cleanshop = document.querySelector('#vaciar-carrito');
const productos = document.querySelector('#lista-productos');
let articulos = [];

registarEventListeners();
function registarEventListeners() {
    productos.addEventListener('click', agregarProducto);
};

// function para seleccionar el contenido correcto
function agregarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado)
    }
};

// lee el contenido HTML al que dimos click y extrae su informacion
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen : producto.querySelector('img').src,
        nombre : producto.querySelector('h4').textContent,
        precio : producto.querySelector('.precio span').textContent,
        id : producto.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }
    // agrega los elementos al array de articulos
    articulos = [...articulos, infoProducto];

    carritoHTML();
}

// muestra los articulos en el HTML
function carritoHTML() {
    articulos.forEach((producto) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${producto.nombre}
            </td>
        `;

        // agrega el HTML al tbody
        shopcar.appendChild(row);
    });
};