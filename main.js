

// ----------------------- SELECTORES -----------------------------

const contenedorProductos = document.querySelector('.contenedorProductos')
const contenedorCarrito = document.querySelector("#contenedorCarrito")
let precioTotal = document.querySelector("#precioTotal")
const btnVaciarCarrito = document.querySelector("#vaciarCarrito")
const btnCarrito = document.querySelector(".btnCarrito")
const modalContenedor = document.querySelector(".modalContenedor")
let contadorCarrito = document.querySelector(".contadorCarrito")
const btnCerrarCarrito = document.querySelector("#carritoCerrar")

const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )
let stock = []





//--------------------DOM de productos---------------------------

fetch("./stock.json")
    .then((resp) => resp.json())
    .then((data) => {
        stock = data

        stock.forEach((el) => {
    const div = document.createElement ("div")
    div.classList.add('fichaProducto')

    div.innerHTML = ` 
                <img class=imagenProducto src=${el.img} alt="camisetaF">
                <p>ID: ${el.id}</p>
                <p> Modelo: ${el.modelo}</p>
                <p>Precio: $${el.precio}</p>
                <button onclick="agregarAlCarrito(${el.id})" class="botonAgregar">AGREGAR <i> </i></button>
                `

contenedorProductos.append(div)
}
)
})




//-----------------------CARRITO--------------------------------

let carrito = []

function agregarAlCarrito (productoId) {

    // const item = stock.find((prod)=> prod.id === productoId)

    const itemInCart = carrito.find((prod)=> prod.id === productoId)
    if (itemInCart) {
        itemInCart.cantidad += 1
    } else {

        const {id, modelo, precio} = stock.find((prod)=> prod.id === productoId)
        const itemToCart = {
            id,
            modelo,
            precio,
            cantidad: 1
        }
        carrito.push(itemToCart)
    }
        
        
        localStorage.setItem("carrito", JSON.stringify(carrito))

    Toastify({
        text: "Producto agregado!",
        duration: 3000,
        gravity: "bottom",
        position:"left",
        style: {
            background: "rgb(26, 25, 25)"
        }
    }).showToast();

    renderCarrito()
    renderTotal()
    renderCantidad()
    }
    





function eliminarDelCarrito (id) {
    const item = carrito.find((prod) =>prod.id === id)
    item.cantidad -= 1

    if (item.cantidad === 0) {
        const indice = carrito.indexOf(item)
        carrito.splice(indice, 1)
    }

    Toastify({
        text: "Se eliminó un producto",
        duration: 3000,
        gravity: "bottom",
        position:"left",
        style: {
            background: "rgb(26, 25, 25)"
        }
    }).showToast();


localStorage.setItem("carrito", JSON.stringify(carrito))
    
renderCarrito()
    renderTotal()
    renderCantidad()
}


function vaciarCarrito (id) {
    Swal.fire({
        title: 'VACIAR CARRITO',
        text: "¿Estás seguro de querer vaciar el carrito?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar carrito',
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Vaciado',
            'Tu carrito se vació correctamente',
            'success'
        )
        carrito.length = 0
        localStorage.setItem("carrito", JSON.stringify(carrito))

renderCarrito ()
renderTotal ()
renderCantidad()
        }
    })

}

btnVaciarCarrito.addEventListener("click", vaciarCarrito)





const renderCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((el) => {
        const div = document.createElement("div")
        div.classList.add("itemEnCarrito")

        div.innerHTML = ` 
                    <p>Modelo: ${el.modelo}</p>
                    <p>Cantidad: ${el.cantidad}</p>
                    <p>$${el.precio} </p>
                    <p>ID: ${el.id} </p>
                    <button onclick="eliminarDelCarrito(${el.id})" class="btnEliminarProducto"><i class="fa-solid fa-trash"></i></button>
                    `
        contenedorCarrito.append(div)
    })
}





const renderCantidad = () => {
    if (carrito.length >=1) {
        contadorCarrito.innerHTML = carrito.reduce((acc, prod)=> acc + prod.cantidad , 0)
    }
    else {
        contadorCarrito.innerHTML = ""
    }
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((el) => {
        total += el.precio * el.cantidad
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


//------------------MODAL-----------------

btnCarrito.addEventListener ("click", ()=> {
        modalContenedor.classList.toggle("modalActivo")
})

btnCerrarCarrito.addEventListener ("click", ()=>{
    modalContenedor.classList.remove("modalActivo")
})




