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

}
function calcular(){
    var visor = document.getElementById("visor")
    try{
    visor.value = eval(visor.value)
    }catch(error)
    {
        visor.value = "Erro"
    }
}
function porcentagem(){
    var visor = document.getElementById("visor")
    visor.value = visor.value/100
}
function radiciacao(){
    var visor = document.getElementById("visor")
    visor.value = Math.sqrt(visor.value)
}
function explainCalc(){
    
}