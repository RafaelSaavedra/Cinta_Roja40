class Maestro{
    constructor(materia){
    this.materia = materia
}
    promedio() {
    let total = 0;
    for(let i=0; i<this.calificaciones.length;i++){
    total += this.calificaciones[i]      
}
    return total/this.calificaciones.length
}
}
class MaestroFisica extends Maestro{
    constructor(materia, calificaciones, antiguedad, ){
     super(materia)    
     this.calificaciones = calificaciones
     this.antiguedad = antiguedad
    }
    /*promedio(){
        let total = 0    
        for(let i=0; i< PedroFlores.calificaciones.length; i++){
        total = total + PedroFlores.calificaciones[i]  
        }
        return total/PedroFlores.calificaciones.length
    
    }
    */
}
let PedroFlores = new MaestroFisica ("fisica1",[6,7,6,8,9,7,10,9],"10 años")

console.log("Profesor PedroFlores ",PedroFlores.materia);
console.log(PedroFlores.calificaciones);
console.log(PedroFlores.antiguedad+" de antiguedad");
console.log("Su promedio de calificaciones es ",PedroFlores.promedio());

class MaestroMusica extends Maestro{
    constructor(materia, calificaciones, edad){
        super(materia)
        this.calificaciones = calificaciones
        this.edad = edad
    }
        /*promedio(){
        let total = 0    
        for(let i=0; i< JuanMartinez.calificaciones.length; i++){
        total = total + JuanMartinez.calificaciones[i]  
        }
        return total/JuanMartinez.calificaciones.length
        }
*/
}
let JuanMartinez = new MaestroMusica ("musicaClasica",[8,9,5,10,7,9,9,8], "57 años")
console.log("Profesor JuanMartinez ", JuanMartinez.materia);
console.log(JuanMartinez.calificaciones);
console.log(JuanMartinez.edad , " de edad")
console.log("Su promedio de calificaciones es ",JuanMartinez.promedio());




