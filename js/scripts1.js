const form =  document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens= JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
})

//Pega os valores que estão nos campos do formulários após apertar o botão de "enviar", depois limpa os campos
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

    //adiciona os itens na lista
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    //deixa o nome em negrito
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.nome_usuario


    //cria um texto "Mensagem" para ficar antes da mensagem
    const mensagem = document.createElement('mensagem2')
    mensagem.innerText = ("----------Mensagem: ")

    //cria um texto "Email:" para ficar antes do email
    const email= document.createElement('email')
    email.innerText = ("Email:  ")  

    //cria um texto "-------------"" para separar o email e a mensagem
    //const espaco= document.createElement('p')
    //espaco.innerHTML = ("---------------------")

    //numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
  
    
    novoItem.innerHTML += email.innerHTML += item.email_usuario +=
    mensagem.innerHTML + item.msg_usuario

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