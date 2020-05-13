import { getMaxListeners } from "cluster"

function login(mail, password) {
    return new Promise((resolve, reject)=>{})
        setTimeout(()=>{
            //aqui se simula ir por datos al servidor
            const mail = "edwin@gmail.com"
            const  pass = "holachicos"

            if(email ==mail && password == pass){
                resolve ("Te has logueado con éxito")
            }else{
                const error = new Error ("Tu assword o email incorrectos")
                reject(error)
            }
        },1000)
}

login