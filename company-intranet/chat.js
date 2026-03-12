function sendMessage(){

const input = document.getElementById("messageInput")
const message = input.value

const box = document.getElementById("messages")

const div = document.createElement("div")

div.innerText = message

box.appendChild(div)

input.value = ""

}