function time() {
    let mensagem = document.querySelector("#mensagem");
    let imagem = document.querySelector(".imagem");
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    mensagem.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos.`
    setTimeout('time()', 500);

    if(hora >= 0 && hora < 12){
        imagem.src = 'fotomanha.jpg'
        document.body.style.background = '#2f919e'
    } else if (hora >= 12 && hora < 18){
        imagem.src = 'fototarde.jpg'
        document.body.style.background = '#fa8231'
    } else {
        imagem.src = 'fotonoite.jpg'
        document.body.style.background = '#051B3A'
    }
}
