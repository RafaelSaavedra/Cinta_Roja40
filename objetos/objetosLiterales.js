let huesos ={
    num_ojos:2,
    color:'cafe',
    num_patas:4,
    altura:'1m',
    peso:'3kg',
    ladra:()=>{
        return 'Guau Guau'
    },
    olfatea: (objeto) =>{
        return 'Huesos está olfateando '+objeto
    },
    comer: (comida) =>{
        if(comida =='carne'){
            return 'Huesos esta contento'
        }else{
            return 'Huesos ya no te quiere'
        }
    }
};

console.log(huesos.ladra());
console.log(huesos.olfatea('otro perro'));
console.log(huesos.comer('carnf'));

let snoopy = {
    num_ojos:2,
    color:'blanco',
    num_patas:2,
    altura:'1m',
    peso:'5kg'
};

console.log("Huesos pesa:",huesos.peso);
console.log("Snoopy pesa:",snoopy.peso);

snoopy.amigo = "Charly Brown";
snoopy.baila = (con)=>{
    return "Snoopy esta bailando"+con
};

console.log(snoopy.baila(" con charlie"));
snoopy.color ='blanco con manchas negras';

console.log("El color de snoopy es:", snoopy.color);

console.log("El amigo de snoopy es:" ,snoopy.amigo);

let scooby = {
    nombre: "Scooby Doo",
    saluda: function() {
        return "Hola soy "+ this.nombre
    }
}
console.log(scooby.saluda());

