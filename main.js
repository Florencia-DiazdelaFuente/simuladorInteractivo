
let iva = 1.21
let total



class Producto {
    constructor (id, modelo, precio, img){
    this.id = id;
    this.modelo = modelo,
    this.precio = precio;
    this.img = img;
}}



const productos = [
]

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






const carrito = []


const calculo = (a, b, c) => (a * b) + c 
// total = calculo (productoSeleccionado.precio, cantidad, precioEstampado)

// totalConIva = calculo (total, iva, 0)


// let detalle = document.createElement ("h4")
// detalle.innerText = "DETALLE DE SU PEDIDO"


// let contenedor = document.createElement ("div")
// contenedor.innerHTML = `<h5> ID: ${productoSeleccionado.id}</h5>
//                         <p> Producto: ${productoSeleccionado.modelo}</p>
//                         <p> Precio: $ ${productoSeleccionado.precio}</p>
//                         <p> Cantidad: ${cantidad}</p>
//                         <p> Estampado: $ ${precioEstampado}</p>
//                         <p> Total: $ ${total}</p>
//                         <p> Total más IVA: $ ${totalConIva}</p>`

// document.body.append(detalle, contenedor)


// const totalCarrito = document.getElementById ("carrito")
// totalCarrito.innerText = "$" + totalConIva

//...............EVENTOS

const productosContainer = document.querySelector('.contenedor-productos')
const contenedorCarrito = document.querySelector("#contenedorCarrito")
let totalCarrito = document.querySelector("#totalCarrito")


productos.forEach((el) => {
    const div = document.createElement ("div")
    div.classList.add()

    div.innerHTML = ` 
                <img  src=${el.img} alt="camisetaF">
                <p> ${el.id}</p>
                <p> ${el.modelo}</p>
                <p>${el.precio}</p>
                <button onclick="agregarAlCarrito(${el.id})" class="botonAgregar">Agregar <i> </i></button>
                `

productosContainer.append(div)
}
)

//.......CARRITO

function agregarAlCarrito (id) {
    const item = productos.find((prod)=> prod.id === id)
    carrito.push(item)
    
    console.log(carrito)
    renderCarrito()
    renderTotal()
    
}


console.log (carrito)


const renderCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((el) => {
        const div = document.createElement("div")
        div.classList.add()

        div.innerHTML = ` 
                    <p> ${el.modelo}</p>
                    <p>${el.precio} </p>
                    <button>Eliminar</button>
                    `
        contenedorCarrito.append(div)
    })
}

const renderTotal = () => {
    total = 0
    carrito.forEach((el) => {
        total += el.precio
    })
    totalCarrito.innerText = total

    console.log(total)


}



