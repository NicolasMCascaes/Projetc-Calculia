document.getElementById("explain-button").addEventListener("click", function(event){
    event.preventDefault();
    var visorValue = document.getElementById("visor").value
    const token = localStorage.getItem("token")
    console.log(token)
    fetch(" https://66c1599ae81c.ngrok-free.app/ai/prompt",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer " + token
        },
        body:JSON.stringify({
            "message":"Você é um professor de matemática e precisa explicar a seguinte expressão:" + visorValue + "Você deve explicar de forma objetiva, clara, didática e sem nenhum erro"
        }) 
    })
    .then(response =>{
            if(!response.ok){
                throw new Error("Erro HTTP " + response.status)
            }
            return response.ok
        })
        .then(data =>{
            document.getElementById("responseArea").innerText = data.generation
        })
        .catch(error =>{
            console.error("Erro na requisição: ", error)
            document.getElementById("responseArea").innerText = "Não foi possível obter a resposta da IA. Aguarde alguns minutos e tente novamente!"
        })
})