class Mascota {
    constructor(nombre, color){
        this._nombre = nombre
        this._color = color
    }
    comer(alimento){
        return`${this.nombre} esta comiendo ${alimento}`
    }
}
class Perro extends Mascota {
    constructor(nombre, color, patas, raza, peso){

        super()
        this.patas = patas
    }
}
return 

