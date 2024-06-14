const productos = [
    {nombre: "harina", precio:50},
    {nombre: "azucar", precio:80},
    {nombre: "polenta", precio:30},
    {nombre: "sal", precio:10},
    {nombre: "fideos", precio:40},
]

let carrito = [];

let seleccion = prompt("Hola, ¿desea comprar algùn producto?");

while (seleccion != "si" && seleccion != "no"){
    alert("por favor, ingresà si o no")
    seleccion = prompt("Hola ¿desea comprar algo?")
}

if (seleccion == "si"){
    alert ("a continuaciòn nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + "" + producto.precio + "$")
    alert (todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Bueno, gracias por venir")
}

while (seleccion != "no"){
    let producto = prompt("Agregà un producto a tu carrito")
    let precio =  0

    if (producto == "harina" || producto == "azucar" || producto == "polenta" || producto == "sal" || producto == "fideos"){
        switch (producto) {
            case "harina":
                precio = 50;
            break;
            case "azucar":
                precio = 80;
            break;
            case "polenta":
                precio = 30;
            break;
            case "sal":
                precio = 10;
            break;
            case "fideos":
                precio = 40;
            break;
            default:
            break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))
        
        carrito.push({ producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt ("¿Desea seguir comprando?")

    while (seleccion === "no"){
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal)=>{
            console.log(`Producto:${carritoFinal.producto} , unidades: ${carritoFinal.unidades}, precio a pagar: ${carritoFinal.precio * carritoFinal.precio}`)
        })
        break
    }
}

const total= carrito.reduce((ecc, el) => ecc + el.precio * el.unidades, 0)
console.log(`El total a pagar serìa: ${total}`);