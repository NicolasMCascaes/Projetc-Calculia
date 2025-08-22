document.getElementById("explain-button").addEventListener("click", function(event){
    event.preventDefault();
    var visorValue = document.getElementById("visor").value
    const token = localStorage.getItem("token")
    console.log(token)
    fetch("https://3bfecf1dd230.ngrok-free.app/ai/prompt",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": "Bearer "+token
        },
        body:JSON.stringify({
            "message":"Você é um professor de matemática e precisa explicar a seguinte expressão:" + visorValue + "Você deve explicar de forma objetiva, clara, didática e sem nenhum erro"
        }) 
    })
    .then(response => response.json())
        .then(data =>{
            const text = data.generation?.text || "Não foi possível obter a resposta da IA.";
            document.getElementById("responseArea").innerText = text;
        })
        .catch(error =>{
            console.error("Erro na requisição: ", error)
            document.getElementById("responseArea").innerText = "Não foi possível obter a resposta da IA. Aguarde alguns minutos e tente novamente!"
        })
})