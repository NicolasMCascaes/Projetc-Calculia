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
    try{
    if(visor.value.includes("√") ){
        let numero = Number(visor.value.replace("√", ""))
        visor.value = Math.sqrt(numero)
    }
    if(isNaN(visor)){
        visor.value = "Erro"
    } else{
        visor.value = eval(visor.value)
    }
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
    if(valor == "Erro"){
        window.alert("Você não pode explicar um valor errado!")
    }
}

function explainCalc(){
    const modal = document.getElementById("janela-modal")
    modal.classList.add('abrir')
    modal.addEventListener('click',(e) =>{
        if (e.target.id == 'close') {
            modal.classList.remove('abrir')
        }
    })
}
