let entrada = prompt("buscás modelo femenino o masculino?").toLowerCase()
let prototipo = Number (prompt ("Elegí el N° de prototipo o modelo"))
let cantidad = Number (prompt("Indique cantidad de camisetas"))
let estampado = prompt("Querés estampar un N° y/o nombre en tus camisetas? SI/NO").toLowerCase()
let precioEstampado = 300
let precio = 0
let iva = 1.21

function multiplicar1 (primerNum, segundoNum, tercerNum) {
    return (primerNum * segundoNum * tercerNum)
}
function multiplicar2 (primerNum, segundoNum, tercerNum, cuartoNum) {
    return ((primerNum + cuartoNum) * segundoNum * tercerNum)
}


if (entrada == "femenino") {
    switch (prototipo) {
        case 1:
        case 2:
        case 3:
            precio = 3000
            break
        case 4: 
        case 5: 
        case 6:
            precio = 3050
            break
        case 7: 
        case 8: 
        case 9:
        case 10:
            precio = 3100
        default: alert ("El prototipo ingresado no es válido")
            break
    } if (estampado == "si") {
        resultado = multiplicar2 (precio, cantidad, iva, precioEstampado)
    alert("tu presupuesto es $" + resultado) 
    }
    else {resultado = multiplicar1 (precio, cantidad, iva)
        alert("tu presupuesto es $" + resultado) }
    


} 
else if (entrada == "masculino") {
    switch (prototipo) {
        case 1:
        case 2:
        case 3:
            precio = 3200
            break
        case 4: 
        case 5: 
        case 6:
            precio = 3250
            break
        case 7: 
        case 8: 
        case 9:
        case 10:
            precio = 3300
        default: alert ("El prototipo ingresado no es válido")
            break
    }
    if (estampado == "si") {
        resultado = multiplicar2 (precio, cantidad, iva, precioEstampado)
    alert("tu presupuesto es $" + resultado) 
    }
    else {resultado = multiplicar1 (precio, cantidad, iva)
        alert("tu presupuesto es $" + resultado) }

}
else {alert("Los datos ingresados no son válidos")}


const modelosFem = ["modelo1", "modelo2", "modelo3", "modelo4", "modelo5"]
modelosFem.push ("modelo6", "modelo7", "modelo8", "modelo9", "modelo10")

console.log (modelosFem)

const modelosMasc1 = ["modelo1", "modelo2", "modelo3", "modelo4", "modelo5"]
const modelosMasc2 = ["modelo6", "modelo7", "modelo8", "modelo9", "modelo10"]
const totalModelosMasc = modelosMasc1.concat(modelosMasc2)

console.log (totalModelosMasc)