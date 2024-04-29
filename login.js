// login com if e else

function entrar(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username =="1234" && password =="1234") {
        alert("Logado com sucesso!");
        window.open('pagina2.html', '_blank');
    }else {
        alert("Usuário ou senha incorretos");
    }
    
}

function criarConta() {
  window.location.href = "pagina5.html";
}

function cadastrar() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  if (username.trim() == "" || password.trim() == "") {
      alert("Por favor, preencha todos os campos.");
      return;
  }else{
    alert("Conta criada com sucesso!");
    window.open('pagina2.html', '_blank');

  }  
}