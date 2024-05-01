function idade(resposta) {
    if(resposta === 'sim'){
        document.getElementById('popup').style.display = 'none';
    }
    else if(resposta === 'nao'){
        window.location.href = 'https://www.youtube.com/watch?v=0wUxEMxJ8Gc';
    }
}