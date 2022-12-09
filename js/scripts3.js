const form =  document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens= JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome_usuario = evento.target.elements['nome_usuario']
    const email_usuario = evento.target.elements['email_usuario']
    const msg_usuario = evento.target.elements['msg_usuario']

    const itemAtual = {
        "nome_usuario": nome_usuario.value,
        "email_usuario": email_usuario.value,
        "msg_usuario": msg_usuario.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens",JSON.stringify(itens))

    nome_usuario.value = ""
    email_usuario.value = ""
    msg_usuario.value = ""

}) 

function criaElemento(item){
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.nome_usuario
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.email_usuario + item.msg_usuario

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function botaoDeleta(id){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "Remover"

    elementoBotao.addEventListener("click",function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao    
}

function deletaElemento(tag, id){
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id ===id), 1)

    localStorage.setItem("itens",JSON.stringify(itens))
}