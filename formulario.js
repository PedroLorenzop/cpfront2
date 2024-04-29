function enviar() {

    var nome = document.getElementsByName("name").value;
    var email = document.getElementsByName("Email").value;
    var mensagem = document.getElementsByName("message").value;


    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    document.getElementsByName("name").value = "";
    document.getElementsByName("Email").value = "";
    document.getElementsByName("message").value = "";
}

