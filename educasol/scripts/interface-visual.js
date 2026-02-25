function exibirResultado(resultado){
    document.getElementById("profile").innerText=resultado.perfil
    document.getElementById("areas").innerText=resultado.areas
    document.getElementById("result").style.display="block"
    document.getElementById("result").scrollIntoView({behavior:"smooth"})
}

function limparAvisos(){
    document.getElementById("noticeForm").style.display="none"
    document.getElementById("noticeLead").style.display="none"
}

function mostrarAvisoFormulario(msg){
    let notice=document.getElementById("noticeForm")
    notice.innerText=msg
    notice.style.display="block"
}

function reorientar(){
    document.getElementById("testForm").reset()
    document.getElementById("result").style.display="none"
    limparAvisos()
    window.scrollTo({top:0,behavior:"smooth"})
}