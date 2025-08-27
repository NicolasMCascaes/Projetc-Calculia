function adicionar(value){
    document.getElementById("visor").value += value;
}
function multiplicar(){
    var visor = document.getElementById("visor")
    
}
function limpar(value){
    document.getElementById("visor").value = ''
}
function apagar(value){
 let visorValue = document.getElementById("visor").value
 document.getElementById("visor").value = visorValue.slice(0,-1)
}
function calcular(){
    var visor = document.getElementById("visor")
    var expr = visor.value
    expr = expr.replace(/(\d+(\.\d+)?)%/g, "$1/100" )
    expr = expr.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)")
    try{
        visor.value = eval(expr)
    }catch(error){
        visor.value = "Erro"
    }
}
function porcentagem(){
    var visor = document.getElementById("visor")
    visor.value = visor.value/100
}
function getResponse(){
    var valor = document.getElementById("visor").value
    if(valor == "Erro" || valor == "NaN"){
        window.alert("Você não pode explicar um valor errado!")
    }
}

function explainCalc(){
    const modal = document.getElementById("janela-modal")
    modal.classList.add('abrir')
    modal.addEventListener('click',(e) =>{
        if (e.target.id == 'close' || e.target.id =='janela-modal') {
            modal.classList.remove('abrir')
        }
    })
}
