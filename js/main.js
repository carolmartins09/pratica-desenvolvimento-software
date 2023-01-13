// arquivo js

var inputNome = document.querySelector("#nome");
var inputSobrenome = document.querySelector("#sobrenome");
var inputEmail = document.querySelector("#email");
var botao = document.querySelector(".mostrar-dados");
var divDados = document.querySelector(".dados-digitados");
var dados = document.querySelector(".dados");


botao.addEventListener("click", function(form) {
    form.preventDefault();

    var nome = inputNome.value;
    var sobrenome = inputSobrenome.value;
    var email = inputEmail.value;

    divDados.classList.remove("dados-digitados");

    dados.innerHTML = `Nome: ${nome} <br> Sobrenome: ${sobrenome} <br> E-mail: ${email}`
})

