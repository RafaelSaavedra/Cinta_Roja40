
const request = require('request');

//function getPlanet(error, response, body) {
//    console.log(response.statusCode);
//    const data = JSON.parse(body)
//    console.log("Su planeta es:",data.name);
//}
//function getPokemon(error,response,body){//Este es mi callback
//console.log(response.statusCode) //200===> que todo bien
//const data = JSON.parse(body)  //CONVIERTE UN JSON EN UN OBJETO DE JS BODY SE TRADUCE A DATA
//console.log(data); //Esto sirve para ver la estructura data.results[i].name

function getAutor(error, response, body) {
    console.log(response.statusCode);
    const data = JSON.parse(body)
    let Autor = "Herman Hesse"
    console.log("El autor es: "+Autor);

    console.log("Su lista de publicaciones en esta editorial es:");
    for(let i=0;i<data.docs.length;i++){
        console.log(data.docs[i].title);
}
}

//ARROW FUNCTION TAMBIEN FUNCIONA IGUAL:  
//const atrapar = (error, response, body)=>{
//  console.log(response,statusCode);
//   console.log(body);
//}
//for (let i=0; i<data.forms.length;i++){
//for(let i = 0; i< data.results.length; i++){
//    console.log(data.results[i].name);
//   console.log(data.forms[i].name);
//}
//console.log(data);

//console.log("    El nombre del Pokemon es :",data.species.name);
//console.log("    Los tipos de este pokemon son: ");
//for(i=0;i<data.types.length;i++){
//console.log(data.types[i]);
//console.log("El Tipo numero "+(i+1)+ " se llama: "+data.types[i].type.name);
//}
//}

//request('https://pokeapi.co/api/v2/pokemon/1/',getPokemon)


//////////   UNA MAS MODERNA FORMA DE HACER FOR:
//   data.results.map((person) => {
//       console.log("Su nombre es: ",person.name)
//        });

//        console.log("======Segundo for=========");
//    for (const  person of data.results){
 //       console.log(person.name);
//    }



//for ( const pokemon of data.results){
//     console.log("El personaje es: ",pokemon.name)
//    request(person.homeworld,getPlanet) // Se ejecuta 10 veces
//    }

//function getPeople(error, response, body) {
//    const data= JSON.parse(body)
//    const personajesMass= data.results.map
//}

//request('https://swapi.dev/api/people/', atrapar)
//request('https://pokeapi.co/api/v2/pokemon/12/',getPokemon)
request('http://openlibrary.org/search.json?author=Herman Hesse',getAutor)
