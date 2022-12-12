const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
} )



form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const email_usuario = evento.target.elements['email_usuario']
    const msg_usuario = evento.target.elements['msg_usuario']

    const existe = itens.find( elemento => elemento.email_usuario === email_usuario.value )

    const itemAtual = {
        "email_usuario": email_usuario.value,
        "msg_usuario": msg_usuario.value
    }

    valida_form(itemAtual)
    criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    email_usuario.value = ""
    msg_usuario.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.email_usuario
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.msg_usuario

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}


function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "Remover"

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}

function valida_form (){
    if(document.getElementById("email_usuario").value == ""){
    alert('Por favor, preencha o campo email');
    document.getElementById("email_usuario").focus();
    return false
    }
    }