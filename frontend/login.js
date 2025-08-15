document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    fetch("https://91a0c0e3559a.ngrok-free.app/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json)
    .then(data =>{
        console.log("Ok")
        window.location.href = "calculia.html"
    })
})