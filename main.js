
// Armado del stock

const productos = []

class Producto {
    constructor (id, modelo, precio, img){
    this.id = id;
    this.modelo = modelo,
    this.precio = precio;
    this.img = img;
}}

const producto1 = new Producto (1, "Classic",3000, "./assets/camiseta2.jpg");
const producto3 = new Producto (3, "Liso",3050, "./assets/camiseta2.jpg");
const producto5 = new Producto (5, "Argento",3100, "./assets/camiseta2.jpg");
const producto7 = new Producto (7, "Banda",3120, "./assets/camiseta2.jpg");
const producto9 = new Producto (9, "Floreado",3150, "./assets/camiseta2.jpg");
const producto2 = new Producto (2, "Classic",3200, "./assets/camiseta1.jpg");
const producto4 = new Producto (4, "Liso",3230, "./assets/camiseta1.jpg");
const producto6 = new Producto (6, "Argento",3250, "./assets/camiseta1.jpg");
const producto8 = new Producto (8, "Banda",3280, "./assets/camiseta1.jpg");
const producto10 = new Producto (10, "Sombra",3300, "./assets/camiseta1.jpg");

productos.push (producto1, producto3, producto5, producto7, producto9, producto2, producto4, producto6, producto8, producto10)




// -- SELECTORES --

const contenedorProductos = document.querySelector('.contenedorProductos')
const contenedorCarrito = document.querySelector("#contenedorCarrito")
let precioTotal = document.querySelector("#precioTotal")
const btnVaciarCarrito = document.querySelector("#vaciarCarrito")
const btnCarrito = document.querySelector(".btnCarrito")
const modalContenedor = document.querySelector(".modalContenedor")
let contadorCarrito = document.querySelector(".contadorCarrito")
const btnCerrarCarrito = document.querySelector("#carritoCerrar")

const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )






//--DOM de productos--


productos.forEach((el) => {
    const div = document.createElement ("div")
    div.classList.add('fichaProducto')

    div.innerHTML = ` 
                <img class=imagenProducto src=${el.img} alt="camisetaF">
                <p>ID: ${el.id}</p>
                <p> Modelo: ${el.modelo}</p>
                <p>$${el.precio}</p>
                <button onclick="agregarAlCarrito(${el.id})" class="botonAgregar">Agregar <i> </i></button>
                `

contenedorProductos.append(div)
}
)




//--CARRITO--

let carrito = []

function agregarAlCarrito (id) {
    const item = productos.find((prod)=> prod.id === id)
    carrito.push(item)
    
    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderCarrito()
    renderTotal()
    renderCantidad()
}

function eliminarDelCarrito (id) {
    const item = productos.find((prod) =>prod.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderCarrito()
    renderTotal()
    renderCantidad()
}

function vaciarCarrito (id) {
    carrito.length = 0
    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderCarrito ()
    renderTotal ()
    renderCantidad()
}

btnVaciarCarrito.addEventListener("click", vaciarCarrito)



const renderCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((el) => {
        const div = document.createElement("div")
        div.classList.add("itemEnCarrito")

        div.innerHTML = ` 
                    <p>Modelo: ${el.modelo}</p>
                    <p>$${el.precio} </p>
                    <button onclick="eliminarDelCarrito(${el.id})"><i class="fa-solid fa-trash"></i></button>
                    `
        contenedorCarrito.append(div)
    })
}


const renderCantidad = () => {
    if (carrito.length >=1) {
        contadorCarrito.innerHTML = carrito.length
    }
    else {
        contadorCarrito.innerHTML = ""
    }
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((el) => {
        total += el.precio
    })
    precioTotal.innerHTML = total
}

if (carritoEnLS) {
    carrito = carritoEnLS

    renderCarrito()
    renderCantidad()
    renderTotal()
} else {
    carrito = []
}


//--MODAL--

btnCarrito.addEventListener ("click", ()=> {
        modalContenedor.classList.toggle("modalActivo")
})




