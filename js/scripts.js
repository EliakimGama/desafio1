$( document ).ready(function() {
   
	var btnMenuMobile = $('.fa-bars');

	$('.fa-bars').on('click', function() {

		$('.nav-container ul').toggleClass('open');

	});

});

function mensagens(){
	var nomePessoa = document.getElementById("nome");
	var emailPessoa = document.getElementById("email");
	var mensagemPessoa = document.getElementById("menaagem");

	var dados = JSON.parse(localStorage.getItem("dadosMensagens"));

	if(dados == null){
		localStorage.setItem("dadosMensagens", "[]");
		dados =[];
	}
	var auxRegistro = {
		nome: nomePessoa.value,
		email: emailPessoa.value,
		mensagem: mensagemPessoa.value
	}
	dados.push(auxRegistro);

	localStorage.setItem("dadosMensagens", JSON.stringify(dados));
}