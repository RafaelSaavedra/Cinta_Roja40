class Perro {
    constructor(nombre,color,num_patas,peso,altura){
        console.log("Desde el constructor de",nombre);
        this.nombre = nombre
        this.color = color
        this.num_patas = num_patas
        this.peso =peso
        this.altura = altura
    }

    saluda(){
        return "Hola soy "+this.nombre
    }
}
console.log("length"+ Perro.length);

let snoopy = new Perro ("Snoopy","blanco con negro",2, "5kg","1m")
let scooby = new Perro ("Scooby Doo","cafe con negro",4,"5kg","1.5m")
let huesos = new Perro ("Huesos","azul",4,"4kg","1.2m")

console.log(snoopy.color);
console.log(scooby.nombre);
console.log(huesos.saluda());

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
            console.log("Estas comprando "+this.carrito[i].nombre+" por "+this.carrito[i].precio)
            total = total + this.carrito[i].precio
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

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let ipad = new Producto('Ipad 16gb',7000)
let iphone = new Producto('Iphon X Max',60000)

let cliente1 = new Cliente(1,'Edwin',27,'M','edwin@gmail.com','57000000')

cliente1.agregarCarrito(ipad)
cliente1.agregarCarrito(iphone)
console.log(cliente1.comprar())
 
    
    