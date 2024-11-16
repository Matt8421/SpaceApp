const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"

function listaImagenes(){
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes => {
        console.log(datosImagenes)
    })
    .catch()
}

listaImagenes()



/* const solicitud = new Promise((resolve, reject) => {
    const response = "resolve"

    if (response == "resolve" ){
        resolve("La promesa se cumplió")
    }
    else{
        reject("La promesa no se cumplió")
    }
})
console.log(solicitud) */