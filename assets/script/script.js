
//Estabelecendo constantes para os objetos input do HTML
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const assunto = document.getElementById("assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.getElementById("mapa")

//Estabelecendo funções de alerta para os inputs
//cria variável que pega a Div separada no HTML para mostrar o alerta
let alertNome = document.getElementById("alertNome") 
//Criação da função de nome "validaNome"
function validaNome(){
  //confere se o nome possui mais de 2 caracteres
  if(nome.value.length <3){
    //restabelece o retorno para a div e suas configurações
    alertNome.innerHTML = "Por favor coloque um nome com mais de 2 caracteres :)"
    alertNome.style.color='red'
  }else{
    alertNome.innerHTML = "Obrigada! Campo preenchido corretamente!"
    alertNome.style.color='green'
    //variável de validação do nome para envio
    nomeOk = true
  }
  
}

      //Alerta para o email
let alertEmail = document.getElementById("alertEmail")
function validaEmail(){
    //Confere se há @ e . no e-mail
  if(email.value.indexOf('@' && '.') == -1) {
    alertEmail.innerHTML = "Por favor coloque um e-mail válido :)"
    alertEmail.style.color='red'
  }else{
    alertEmail.innerHTML = "Obrigada! Campo preenchido corretamente!"
    alertEmail.style.color='green'
    //variável de validação do email para envio
    emailOk = true
  } 
}

    //Contador de caracteres para o Assunto
let alertAssunto = document.getElementById("alertAssunto")
function validaAssunto(){
  //variaveis para o numero de caracteres do texto e para a msg do contador
  let cartext = assunto.value.length
  let cont = "(" + cartext + "/500)"
  //Estabelecendo o máximo de caracteres e msg de erro
  if (assunto.value.length > 5) {
    //Variavel com a mensagem de erro
    msgerro = "   Por favor, escreva uma mensagem com até 500 caracteres. "
    //Junção da msg de erro escrita com o contador
    alertAssunto.innerHTML =  msgerro + cont
    //Formatação da msg de erro
    alertAssunto.style.color='red'
  }else {
    alertAssunto.innerHTML = cont
    alertAssunto.style.color='green'
    //variável de validação do assunto para envio
    assuntoOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Mensagem enviada com sucesso!')
  }else{
    alert('Preencha o formulário corretamente')
  }
}

function mapzoom() {
  mapa.style.width = "800px"
  mapa.style.height = "600px"
}

function mapnormal(){
  mapa.style.width = "300px"
  mapa.style.height = "225px"

}