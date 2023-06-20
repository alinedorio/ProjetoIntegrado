//Fazer ir de index.html para criarConta.html ao clicar em "inscrever-se" || frame 1 -> 2
var entrarButton = document.getElementById('index_inscrever');
entrarButton.addEventListener('click', function() {
  window.location.href = 'criarConta.html';
});

//Fazer ir de criarConta.html para habilidades.html ao clicar em "continuar" || frame 2 -> 3
var entrarButton = document.getElementById('criarConta_continuar');
entrarButton.addEventListener('click', function() {
  window.location.href = 'habilidades.html';
});

//Fazer ir de habilidades.html para comunidades.html ao clicar em "confirmar" || frame 3 -> 4
var entrarButton = document.getElementById('habilidades_confirmar'); //ainda é necessário implementar
entrarButton.addEventListener('click', function() {
  window.location.href = 'comunidades.html';
});

//Fazer ir de comunidades.html para feed.html ao clicar em "confirmar" || frame 4 -> 5
var entrarButton = document.getElementById('comunidades_confirmar');
entrarButton.addEventListener('click', function() {
  window.location.href = 'feed.html';
});
/*
//Menagem de erro ao tentar logar (index.html)
var index_botao_entrar = document.getElementById('index_botao_entrar');
var index_mensagem_erro = document.getElementById('index_mensagem_erro');
entrarButton.addEventListener('click', function() {
  //index_mensagem_erro.textContent = 'Usuário e/ou senha inválidos';
  alert("Usuário e/ou senha inválidos");  
}

function validarLogin() {
  var cpf_input = document.getElementById('cpf_input').value;
  var senha_input = document.getElementById('senha_input').value;
      
  // Verifica se o usuário e a senha são válidos
  if (cpf_input === 'admin' && senha_input === 'senha123') {
  // Redireciona para a página de sucesso
  window.location.href = 'feed.html';
  } else {
  // Exibe uma mensagem de erro
  var mensagemErro = document.getElementById('mensagem-erro');
  mensagemErro.style.display = 'block';
  }
}*/