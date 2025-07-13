function adicionar(value){
    document.getElementById("visor").value += value;
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