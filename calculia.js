document.getElementById("explain-button").addEventListener("click", function(event){
    event.preventDefault();
    var visorValue = document.getElementById("visor").value
    const token = localStorage.getItem("token")
    console.log(token)
    fetch("https://87de6ad912ca.ngrok-free.app/ai/generate",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer " + token
        },
        body:JSON.stringify({
            "message":"Você é um professor de matemática e precisa explicar a seguinte expressão:" + visorValue + "Você deve explicar de forma objetiva, clara, didática e sem nenhum erro"
        }) 
    })
    .then(response => response.ok)
        .then(data =>{
            document.getElementById("responseArea").innerText = data.generation
        })
        .catch(error =>{
            console.error("Erro na requisição: ", error)
            document.getElementById("responseArea").innerText = "Não foi possível obter a resposta da IA. Aguarde alguns minutos e tente novamente!"
        })
})