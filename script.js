function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var min = data.getMinutes()
    var horaAtual = hora + ':' + min
    
    if (hora >= 0 && hora < 12) { 
        msg.innerHTML = `Agora são ${horaAtual}h. Tenha um Bom Dia! `        
        img.src = 'foto_manha.PNG' 
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) { //boa tarde
        msg.innerHTML = `Agora são ${horaAtual}h. Tenha uma Boa Tarde! ` 
        img.src = 'foto_tarde.PNG'
        document.body.style.background = '#b9856f'
    } else { //boa noite 
        msg.innerHTML = `Agora são ${horaAtual}h. Tenha uma Boa Noite `        
        img.src = 'foto_noite.PNG'
        document.body.style.background = '#515154'
    }
}