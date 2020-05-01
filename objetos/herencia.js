class Mascota {
    constructor(nombre, color){
        this._nombre = nombre
        this._color = color
    }
    comer(alimento){
        return`${this.nombre} esta comiendo ${alimento}`
    }
    saludar(){
        return `Hola soy ${this.nombre} te saludo humano`
    }
}
class Perro extends Mascota {
    constructor(nombre, color, patas, raza, peso){

        super()
        this.patas = patas
    }
}
class Pez extends Mascota{

    constructor(nombre,color,tipoPecera,tipoAgua,cantidadAlimento){
        super(nombre, color)

        this.tipoPecera = tipoPecera
        this.tipoAgua = tipoAgua
        this.cantidadAlimento = cantidadAlimento

    }
    // Override o Sobrescribir
    saludar(){
        return 'glug glug'
    }

    nadar(){
        return `${this.nombre} esta nadando feliz en su pecera ${this.tipoPecera}`
    }

}

//argumento desde linea de comandos
//console.log(process.argv)

let nemo = new Pez('Nemo','Naranja','Cristal Templado','Salada','2g')
console.log(nemo.color)
console.log(nemo.saludar())
console.log(nemo.nadar())



let huesos = new Perro ('Huesos','cafe',4,'galgo','5kg')
console.log(huesos.nombre)
console.log(huesos.raza)
console.log(huesos.comer('carnita')) 
console.log(huesos.saludar()) 

