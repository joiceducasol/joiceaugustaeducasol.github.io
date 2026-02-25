let resultadoFinal=""

function processarFormulario(e){
    e.preventDefault()
    limparAvisos()
    const respostas = coletarRespostas()
    if(!respostas.validas){
        mostrarAvisoFormulario("Responda todas as perguntas.")
        return
    }
    const contagem = contarRespostas(respostas.valores)
    const resultado = calcularResultado(contagem)
    exibirResultado(resultado)
}

function init(){
    document.getElementById("testForm").addEventListener("submit",processarFormulario)
    document.getElementById("reorientar").onclick=reorientar
    document.getElementById("btnWhats").onclick=enviarWhatsApp
}

init()