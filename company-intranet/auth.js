function login(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

if(email === "admin@company.com" && password === "1234"){

localStorage.setItem("loggedIn","true")

window.location = "dashboard.html"

}else{

alert("Invalid login")

}

}