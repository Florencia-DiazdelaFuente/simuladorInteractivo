let idSeleccionado = Number (prompt ("ingrese N° de ID del producto"))
let cantidad = Number (prompt("Indique cantidad de camisetas"))
let estampado = prompt("Querés estampar un N° y/o nombre en tus camisetas? SI/NO").toLowerCase()
let precioEstampado = 0
let iva = 1.21
let total = 0

if (estampado === "si") {
    precioEstampado = 300
}
else {
    precioEstampado = 0
}

if ((idSeleccionado > 12) || (cantidad == 0)) {
    alert ("Los datos ingresados no son válidos")
}


const productos = [ {id: 1, modelo:"Classic", precio: 3000},
                    {id: 3, modelo:"Liso", precio: 3050},
                    {id: 5, modelo:"Argento", precio: 3100},
                    {id: 7, modelo:"Banda", precio: 3120},
                    {id: 9, modelo:"Floreado", precio: 3150},
                    {id: 11, modelo:"Dúo", precio: 3200},
                    {id: 2, modelo:"Classic", precio: 3200},
                    {id: 4, modelo:"Liso", precio: 3230},
                    {id: 6, modelo:"Argento", precio: 3250},
                    {id: 8, modelo:"Banda", precio: 3280},
                    {id: 10, modelo:"Sombra", precio: 3300},                   
                    {id: 12, modelo:"Banda horizontal", precio: 3310}
]


const productoSeleccionado = productos.find((el) => el.id === idSeleccionado)


const carrito = []
carrito.push(productoSeleccionado, cantidad, precioEstampado)

total = (productoSeleccionado.precio * cantidad) + precioEstampado

console.log (carrito)

alert ("El total de su compra es: $" + total)