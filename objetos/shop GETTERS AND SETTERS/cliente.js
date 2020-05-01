class Cliente {

    constructor(id,nombre,edad,genero,email,tel){
        this.id = id
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
        this.email = email
        this.tel =  tel
        this.carrito = []
        this.suscrito = false
    }

    agregarCarrito(producto){
        this.carrito.push(producto)
    }

    checarCarrito(){
        return this.carrito
    }

    comprar(){
        let total = 0;
        for(let i=0; i < this.carrito.length; i++ ){
            console.log("Estas comprando "+this.carrito[i].getNombre()+" por "+this.carrito[i].getPrecio())
            total = total + this.carrito[i].getPrecio()
        }
        return "Tu total de tu compra es: "+total
    }

    suscirbirse(){
        if(this.suscrito){
            return 'El cliente ya esta suscrito'
        }else{
            this.suscrito = true
            return 'El cliente se suscribio correctamente'
        }
    }
}

module.exports = Cliente; // La clase Cliente se puede compartir en otros archivos 


// AQUI CAMBIAS AL FOLDER OBJETOS/SHOP/PRODUCTO.JS
// 23  objetos/shop/Producto.js 
//@@ -0,0 +1,23 @@


class Producto{
    constructor(nombre,precio){
        this._nombre = nombre
        this._precio = precio
    }

    // Getters & Setter

    getNombre(){
        return this._nombre
    }

    getPrecio(){
        return this._precio
    }

    setNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}


module.exports = Producto; 

//AQUI CAMBIAS AL ARCHIVO OBJETOS/SHOP/INDEX.JS
// 29  objetos/shop/index.js 
//@@ -0,0 +1,29 @@


const Cliente = require('./Cliente');
const Producto = require('./Producto');

let ipad = new Producto('Ipad 16gb',7000)
let iphone = new Producto('Iphon X Max',60000)
let cliente1 = new Cliente(1,'Edwin',27,'M','edwin@gmail.com','57000000')

cliente1.agregarCarrito(ipad)
cliente1.agregarCarrito(iphone)
console.log(cliente1.comprar())

let computadora = new Producto('Computadora Gamer',70000)
let celular =  new Producto('Samsung Galaxy s20',30000)
let play = new Producto('Play Station 4',10000)

console.log(computadora.getNombre())
computadora.nombre =  "Otra computadora que no es Gamer"
console.log(computadora.getNombre())
computadora.setNombre("Computadora Master Gamer")
console.log(computadora.getNombre())

const cliente2 = new Cliente(2, 'Luis Torres', 35, 'M', 'luis@gmail.com', '570000000')

cliente2.agregarCarrito(computadora)
computadora.precio = 2
cliente2.comprar()
