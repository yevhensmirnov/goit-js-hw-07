const input = document.querySelector('#validation-input');
let inputLength = input.getAttribute('data-length');
let numbInputLength = parseInt(inputLength);

input.addEventListener('input', onInputChange);
function onInputChange(e) {

    if (e.currentTarget.value.length === numbInputLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");

    }  if (e.currentTarget.value.length !== numbInputLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}