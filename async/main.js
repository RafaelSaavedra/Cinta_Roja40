/*
function mensaje (callback) {
    callback()
}

mensaje (function () {
    console.log("Hola!!!!!!!");
    console.log('Hola !!!')}
)

/*
function bisquetes (pregon,callback){
    console.log(pregon);
    callback()
}
 bisquetes ('¡ BISQUETES CALIENTITOS !!',function(){
     console.log('¡LLEVE SUS BISQUETES!!');
 })


 // ejercicio 2


 function sup (num1, num2, callback){
     callback(num1, num2)
 }

 function callsuma(n1,n2){
     console.log("suma ",n1+n2);
 }

 function callresta(m1,m2){
     console.log("resta ",m1-m2);
 }

 function callmult(k1,k2){
     console.log("multiplicacion ",k1*k2);
 }

 sup(2,3, callresta)

*/
let str;

 function sup (str,callback){
     callback(str)
 }

 function minus(str){
    console.log (str.toLowerCase());
 }

 function mayus(str){
     console.log(str.toUpperCase());
 }
 sup("fjnrjtnYYYYkrjnkrjn", mayus)
 



 let ejemplo =[300,120,80,100]

 function name(ejemplo, callback) {  
     callback(ejemplo)
 }
 function name(ejemplo) {
     for (i=0; i<ejemplo.length;i++){
     if(ejemplo[i]<120){
         ejemplo.splice(i)
     }
    }
 }
 name(ejemplo, name)
 console.log(ejemplo);



/*
5 THINGS you SHOULD KNOW : CALLSTACK


function sayHello (){
    console.log(" Hello my name is Ed");
}

function sayAge(){
    console.log("My age is 29");
}

function sayAll(){
    sayHello();
    sayAge();

}

sayAll()

console.log("Todo terminado");


5 THINGS


(function(){
    console.log("Heyyyy!!");
})();


5 SCOPE SCOPE SCOPE

 
const name = "Ed";
const age = 25

console.log(name);

function sayName(){
    const name="Victor"
    console.log(`Hello my name is ${name}`);
    function sayAge(){
        console.log(`My age is ${age}`);
    }
    sayAge()
}
sayName()
    console.log("Tutto finitto");



    CALLBACK    CALLBACK  SINCRONOUS  CALLBACKS


function sayName(name,callback) {
    console.log("Running some code");
    console.log("Running some code");
    console.log("Running some code");
    console.log("Running some code");
    console.log("Running some code");
    console.log(`Hello, my name is ${name}`);
    callback();
}
function callback(){
    console.log("This ran at the end");
}  
function callforward() {
    console.log("This is the othre function");
}
function callNames() {
    console.log("third party");

    
}
sayName("Ed", callNames)


/*

CALLBACK ASINCRONOUS CALLBACKS


console.log("First line");

setTimeout(() => {
    console.log("From callback");
},4000);

console.log("Last line");

// NO ARRORW FUNCTION:


console.log("Primera linea");

setTimeout(hello
,4000);

console.log("Ultima linea");


function  hello () {
    console.log("Hola desde acá");  
}
*/

