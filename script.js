const URL = 'https://jsonplaceholder.typicode.com/users'

let firstName = document.getElementById("name");
let lastName = document.getElementById("lastName");
let birthday = document.getElementById("birthday");
let btnSubmit = document.getElementById("submit")

const information = {
    nombre : firstName.value,
    apellido : lastName.value,
    nacimiento : birthday.value
}

const metodo = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(information),
};

async function postInformation(URL){
    let response = await fetch (URL, metodo)
    if (response.ok) {
        console.log("Estado: ", response.status)

    } else {
        alert("Estado: ", response.status)
    }
}

btnSubmit.addEventListener("click", (event)=>{
    event.preventDefault()
    postInformation(URL, metodo)
})