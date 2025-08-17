document.getElementById("register-form").addEventListener("submit", function(event){
    event.preventDefault();
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    fetch("https://66c1599ae81c.ngrok-free.app/auth/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log("ok")
        window.location.href="index.html"
    })
})