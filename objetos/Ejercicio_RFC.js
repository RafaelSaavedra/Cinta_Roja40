class Persona {
    constructor(nombre1, nombre2, apellido1, apellido2, fecha_nacimiento, edad,  sexo, peso, altura){
    this.nombre1 = nombre1
    this.nombre2 = nombre2
    this.apellido1 = apellido1
    this.apellido2 = apellido2
    this.fecha_nacimiento = fecha_nacimiento
    this.edad = edad
    this.sexo = sexo
    this.peso = peso
    this.altura = altura
    }
   calcularIMC(){
        return this.peso/this.altura
   };
   esMayorDeEdad (){
       if(this.edad>18){
           return this.nombre1 + mayorDeEdad
       }else{
           return this.nombre1 + menorDeEdad
       };
    }
    calcularRFC (){
        let reg =[this.apellido1, this.apellido2, this.nombre1, this.fecha_nacimiento]

    }
}

let persona1 = new Persona("RAFAEL", "DE_JESUS", "SAAVEDRA", "MACHIN","170454", 66, "M", 86, 1.67);

console.log(persona1());
