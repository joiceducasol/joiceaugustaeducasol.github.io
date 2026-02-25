function enviarWhatsApp(){
    let nome=document.getElementById("nome").value.trim()
    let email=document.getElementById("email").value.trim()
    limparAvisos()
    if(nome=="" || email=="" || !email.includes("@gmail.com")){
        let notice=document.getElementById("noticeLead")
        notice.innerText="Preencha nome e Gmail válido."
        notice.style.display="block"
        return
    }
    let msg=encodeURIComponent(resultadoFinal)
    window.location.href="https://wa.me/5521972601158?text="+msg
}