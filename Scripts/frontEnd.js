const submitButton= document.querySelector("#submitButton");

submitButton.addEventListener("click", changeTestText, true);

function changeTestText(){
    const paragraph= document.querySelector("#TestText");
    paragraph.innerHTML ="newText";
}