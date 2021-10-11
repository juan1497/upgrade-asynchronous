// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

   return promise.then(() => {console.log('Time out!')})
};

// runTimeOut();
const runTimeOut1= async () => {
    const promise = await runTimeOut()
}
runTimeOut1()

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();
const getCharacters= async()=>{
    const res=await fetch('https://rickandmortyapi.com/api/character')
    const resJson= await res.json();
    const characters=resJson.results.map((character)=>(
        {
        id : character.id,
        name : character.name,
        image : character.image,
        status:character.status
        }     
    ))
    console.log("estos son los personajes ",characters)
}
getCharacters()