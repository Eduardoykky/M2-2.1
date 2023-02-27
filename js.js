
let nameInput = document.getElementById('nameInput')
nameInput.addEventListener('focus', (event) => {
    event.target.style.outlineColor = "purple";
})


let addressInput = document.getElementById('addressInput')
addressInput.addEventListener('focus', (event) => {
    event.target.style.outlineColor = "purple";
})


let timeOpen = document.getElementById('timeOpen')
timeOpen.addEventListener('focus', (event) => {
    event.target.style.outlineColor = "purple";
})


let timeExit = document.getElementById('timeExit')
timeExit.addEventListener('focus', (event) => {
    event.target.style.outlineColor = "purple";
})


let name = document.querySelectorAll('input[id="nameInput"],[id="addressInput"],[id="checkbox1"],[id="checkbox2"],[id="checkbox3"],[id="checkbox4"],[id="checkbox5"],[id="checkbox6"],[id="checkbox7"],[id="openingTime"],[id="closingTime"]');

for (let index = 0; index < name.length; index++) {

    name[index].addEventListener("change", handleChange);

    function handleChange(e) {
        let chave
        if (index == 0) {
            chave = "Nome da Loja"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 1) {
            chave = "Endereço"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 2) {
            chave = "Domingo"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 3) {
            chave = "Segunda"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 4) {
            chave = "Terça"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 5) {
            chave = "Quarta"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 6) {
            chave = "Quinta"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 7) {
            chave = "Sexta"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 8) {
            chave = "Sábado"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 9) {
            chave = "Horário de Abertura"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 10) {
            chave = "Horário de Fechamento"
            window.localStorage.setItem(chave, e.target.value);
        }
    }
}

function ValorLocalStorage() {
    document.getElementById("nameInput").value = window.localStorage.getItem("Nome da Loja")
    document.getElementById("addressInput").value = window.localStorage.getItem("Endereço")
    if (window.localStorage.getItem("Domingo") == "on") {
        document.getElementById("checkbox1").checked = true
    } else {
        document.getElementById("checkbox1").checked = false
    }

    if (window.localStorage.getItem("Segunda") == "on") {
        document.getElementById("checkbox2").checked = true
    } else {
        document.getElementById("checkbox2").checked = false
    }

    if (window.localStorage.getItem("Terça") == "on") {
        document.getElementById("checkbox3").checked = true
    } else {
        document.getElementById("checkbox3").checked = false
    }

    if (window.localStorage.getItem("Quarta") == "on") {
        document.getElementById("checkbox4").checked = true
    } else {
        document.getElementById("checkbox4").checked = false
    }

    if (window.localStorage.getItem("Quinta") == "on") {
        document.getElementById("checkbox5").checked = true
    } else {
        document.getElementById("checkbox5").checked = false
    }

    if (window.localStorage.getItem("Sexta") == "on") {
        document.getElementById("checkbox6").checked = true
    } else {
        document.getElementById("checkbox6").checked = false
    }

    if (window.localStorage.getItem("Sábado") == "on") {
        document.getElementById("checkbox7").checked = true
    } else {
        document.getElementById("checkbox7").checked = false
    }

    document.getElementById("openingTime").value = window.localStorage.getItem("Horário de Abertura")
    document.getElementById("closingTime").value = window.localStorage.getItem("Horário de Fechamento")
}

let form = document.getElementById('forms')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("Preparando Envio...")
});

// let form = document.getElementById("form")
// form.addEventListener("submit" , logSubmit)
// function logSubmit(event) {
//     alert("Preparando Envio...")
//     event.preventDefault()
// }