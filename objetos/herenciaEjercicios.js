class Maestro{
    constructor(materia){
    this.materia = materia
}
/*
calcular(promedio){
    let calTotal = 0;
    let promedio;
    for(i=0; i<8;i++)
    calTotal += this.calificaciones[i]
    promedio =calTotal/8
    console.log(promedio);
    
}
*/
}

class MaestroFisica extends Maestro{
    constructor(materia, calificaciones, antiguedad, ){
     super(materia)    
     this.calificaciones = calificaciones
     this.antiguedad = antiguedad
    }
    promedio(){
        let total = 0    
        for(let i=0; i< PedroFlores.calificaciones.length; i++){
        total = total + PedroFlores.calificaciones[i]  
        }
        return total/PedroFlores.calificaciones.length
    
    }
}
let PedroFlores = new MaestroFisica ("fisica1",[6,7,4,8,9,1,10,9],"10 años")

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
        promedio(){
        let total = 0    
        for(let i=0; i< JuanMartinez.calificaciones.length; i++){
        total = total + JuanMartinez.calificaciones[i]  
        }
        return total/JuanMartinez.calificaciones.length
    
    }
}
let JuanMartinez = new MaestroMusica ("musicaClasica",[8,9,5,3,7,9,4,8], "57 años")
console.log("Profesor JuanMartinez ", JuanMartinez.materia);
console.log(JuanMartinez.calificaciones);
console.log(JuanMartinez.edad , " de edad")
console.log("Su promedio de calificaciones es ",JuanMartinez.promedio());




