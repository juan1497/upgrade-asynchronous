// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.
const getPoint=async ()=>{
    let agify= await fetch("https://api.agify.io?name=michael")
    let agifyJson= await agify.json();
    console.log(agifyJson)
}
getPoint()
// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io/';

document.querySelector("button").addEventListener('click',()=>{
        let userName=document.querySelector("input").value;
        getNationalize(userName)
        
})
const getNationalize= async (userName)=>{
    const nationalize= await fetch(`https://api.nationalize.io/?name=${userName}`);
    const nationalizeJson= await nationalize.json();
    // console.log(nationalizeJson)
    displayUser(userName,nationalizeJson)
    
}
// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.
// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.
const displayUser=(userName,nationalizeJson)=>{
    let p=document.createElement("p");
    p.className=userName
    p.innerHTML=`El nombre ${userName} <br>` 
    for(country of nationalizeJson.country){
        p.innerHTML+=` tiene una probabilidad de ${(country.probability*100).toFixed(1)}% de ser ${country.country_id} <br>`
    }
    document.body.appendChild(p)
    botonEliminar(userName)

}
const botonEliminar=(username)=>{
    let btn=document.createElement("button")
    btn.textContent=`borrar a ${username}`
    btn.addEventListener("click",()=>{
        document.querySelector(`p.${username}`).remove();
        btn.remove()
    })
    document.body.appendChild(btn)

}
