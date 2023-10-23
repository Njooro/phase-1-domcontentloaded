// Your code goes here
document.addEventListener("DOMContentLoaded", function (){
    changeText();
})
function changeText(){
    let paragraph = document.querySelector("p");
    paragraph.textContent = "This is really cool!"
}