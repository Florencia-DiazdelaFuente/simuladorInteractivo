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

class Producto {
    constructor (id, modelo, precio){
    this.id = id;
    this.modelo = modelo,
    this.precio = precio;
}}



const productos = [
]

const producto1 = new Producto (1, "Classic",3000);
const producto3 = new Producto (3, "Liso",3050);
const producto5 = new Producto (5, "Argento",3100);
const producto7 = new Producto (7, "Banda",3120);
const producto9 = new Producto (9, "Floreado",3150);
const producto11 = new Producto (11, "Dúo",3200);
const producto2 = new Producto (2, "Classic",3200);
const producto4 = new Producto (4, "Liso",3230);
const producto6 = new Producto (6, "Argento",3250);
const producto8 = new Producto (8, "Banda",3280);
const producto10 = new Producto (10, "Sombra",3300);
const producto12 = new Producto (12, "Banda horizontal",3310);

productos.push (producto1, producto3, producto5, producto7, producto9, producto11, producto2, producto4, producto6, producto8, producto10, producto12)



const productoSeleccionado = productos.find((el) => el.id === idSeleccionado)


const carrito = []
carrito.push(productoSeleccionado, cantidad, precioEstampado)

const calculo = (a, b, c) => (a * b) + c 
total = calculo (productoSeleccionado.precio, cantidad, precioEstampado)

totalConIva = calculo (total, iva, 0)

console.log (carrito)

alert ("El total de su compra es: $" + total + ". El total de su compra con IVA es: $" + totalConIva)