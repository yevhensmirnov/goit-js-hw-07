const rem = document.querySelector("[data-action='decrement']");
    const add = document.querySelector("[data-action='increment']");
    const value = document.querySelector('#value');
    
    let counterValue = 0;

    function Decrement() {
        counterValue -= 1;
        value.textContent = counterValue;
    }

    function Increment() {
        counterValue += 1;
        value.textContent = counterValue;
    }

    rem.addEventListener('click', Decrement);
    add.addEventListener('click', Increment);