class Libro {
    constructor (titulo, autor, status_lectura){
    this.titulo = titulo;
    this.autor = autor ;
    this.status_lectura = status_lectura
}
}

let Demian = new Libro ("Demian", "Herman Hesse", true);
let Metamorfosis = new Libro ("Metamorfosis", "Franz Kafka", true )
let Sinhué = new Libro ("Sinhué el Egipcio", "Mika Waltari", true)
let Chanoc = new Libro ("Chanoc", "Chano Urrueta", false)

let biblioteca = [Demian, Metamorfosis, Sinhué, Chanoc ];



    for (let i=0; i<biblioteca.length;i++){
    console.log(biblioteca[i]);
    if (biblioteca[i].status_lectura == false){
        console.log("No has leido este libro");
    }else if(biblioteca[i].status_lectura == true){
        console.log("Ya lo leiste!");
    }
    }
    

    
