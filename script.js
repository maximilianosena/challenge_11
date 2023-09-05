const URL = 'https://jsonplaceholder.typicode.com/users'

let firstName = document.getElementById("name");
let lastName = document.getElementById("lastName");
let birthday = document.getElementById("birthday");
let btnSubmit = document.getElementById("submit")

h
async function postInformation(URL){

//Creo el objeto que va a enviarse a la URL
    const information = {
        nombre : firstName.value,
        apellido : lastName.value,
        nacimiento : birthday.value
    }

    //Creo el objeto de metodo, y la información que se envía en formato JSON
const metodo = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(information),
};


//Ingreso el metodo como segundo parametro del fetc
    let response = await fetch (URL, metodo)
    if (response.ok) {
        console.log("Estado: ", response.status)
        console.log("Nombre: ", await response.json())
    } else {
        alert("Estado: ", response.status)
    }
}

btnSubmit.addEventListener("click", (event)=>{
    event.preventDefault()
    postInformation(URL)
})