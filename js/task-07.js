const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener('input', onInputChange);

function onInputChange(e) {
    text.style.fontSize = e.currentTarget.value + "px";
}