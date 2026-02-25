function coletarRespostas(){
    let answers=["q1","q2","q3","q4","q5"]
    let valores=[]
    for(let q of answers){
        let vs=document.querySelectorAll('input[name="'+q+'"]:checked')
        if(vs.length==0) return {validas:false}
        vs.forEach(v=>{valores.push(v.value)})
    }
    return {validas:true,valores:valores}
}

function contarRespostas(valores){
    let count={A:0,B:0,C:0,D:0}
    valores.forEach(v=>{count[v]++})
    return count
}

function calcularResultado(count){
    let perfil="",areas=""
    let max=Math.max(count.A,count.B,count.C,count.D)
    if(count.A==max){
        perfil="Perfil Social / Humano"
        areas="Saúde • Educação • Psicologia • Enfermagem • Terapias • Serviço Social • Pedagogia"
    } else if(count.B==max){
        perfil="Perfil Negócios / Resultados"
        areas="Administração • Gestão • Marketing • Empreendedorismo • Finanças • Liderança"
    } else if(count.C==max){
        perfil="Perfil Criativo / Inovador"
        areas="Design • Publicidade • Moda • Conteúdo Digital • Artes • Produção Audiovisual"
    } else {
        perfil="Perfil Técnico / Analítico"
        areas="TI • Programação • Engenharia • Dados • Logística • Contabilidade • Tecnologia"
    }
    resultadoFinal = `RESULTADO:"OLÁ, GOSTARIA DE UMA CONVERSA APROFUNDADA"\nPerfil: ${perfil}`
    return {perfil,areas}
}