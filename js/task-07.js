const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener('input', onInutChange);

function onInutChange(e) {
    text.style.fontSize = e.currentTarget.value + "px";
}