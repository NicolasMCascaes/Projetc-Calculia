document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    fetch("https://ba2e73149bbd.ngrok-free.app/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => {
    if (!response.ok) throw new Error("HTTP error " + response.status);
    return response.json();
})
    .then(data =>{
        console.log("Ok")
        localStorage.setItem("token", data.token)
        window.location.href = "calculia.html"
    })
})