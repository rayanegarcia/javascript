function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'bomdia.png'
        document.body.style.background = '#4e685d'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'boatarde.png'
        document.body.style.background = '#469de6'
    } else {
        // boa noite
        img.src = 'boanoite.png'
        document.body.style.background = '#00557e'
    }
}
