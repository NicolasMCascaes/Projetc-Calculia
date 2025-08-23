document.getElementById("explain-button").addEventListener("click", function(event){
    event.preventDefault();
    var visorValue = document.getElementById("visor").value
    const token = localStorage.getItem("token")
    const spinner = document.getElementById("spinner")
    responseText = document.getElementById("responseText")
    spinner.style.display="block"
    responseText.textContent = ""
    fetch("/api/proxy",{
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
            console.log(data)
            document.getElementById("responseText").innerHTML = data.generation;
        })
        .catch(error =>{
            console.error("Erro na requisição: ", error)
            document.getElementById("responseArea").innerText = "Não foi possível obter a resposta da IA. Aguarde alguns minutos e tente novamente!"
        })
        .finally(() =>{
            spinner.style.display="none"
        })
})