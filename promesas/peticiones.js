const axios = require('axios');

function getCharacter(id) {
    const url =`https://swapi.dev/api/people/${id}`

    const character = axios.get(url)

    character.then(()=>{
        console.log(response .data);
        console.log(object);

    });
    
    .catch((error) => {
         console.log(error.response.data);
         console.log(error.object);

    });
        
    

}