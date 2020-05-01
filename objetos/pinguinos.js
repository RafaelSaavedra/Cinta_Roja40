let myPenguin = {
    nombre: 'Misha',
    origen:'Penguin lost',
    creador: 'Kurkov',
    notas: 'Intriga politica',
    puedeVolar : false
}

console.log("Hola soy un pinguino y mi nombre es "+ myPenguin.nombre);



myPenguin.graznar=()=>{
    return "kaww kaww!!"
}
console.log(myPenguin.graznar());

myPenguin.saludar =function(){
    return "Hola soy "+ this.nombre
}
console.log(myPenguin.saludar());

myPenguin.nombre = "Señor Pingu"

console.log(myPenguin.saludar())


myPenguin.volar =function(){
    if(this.puedeVolar!=true){
        return "puedo volar !!"
    }else{
        return "no puedo volar";
    }
}
console.log("Hola soy "+myPenguin.nombre+" y "+myPenguin.volar());
