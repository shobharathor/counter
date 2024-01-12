

const main = document.querySelector('#title');
const decremant = document.querySelector('#decre');
const  reset = document.querySelector('#reset');
const  increament = document.querySelector('#incre');
const message = document.querySelector('#display');
let currvalue = 0;


increament.addEventListener ('click', () => {
     
     currvalue++;
     main.textContent = currvalue;
     message.innerHTML = `<p class = msg >The Value is Increasing...</p>`;
});

decremant.addEventListener('click', () =>{
    currvalue--;
    main.textContent = currvalue;
    message.textContent = "The Value is Decreasing...";
});

reset.addEventListener ('click' ,() =>{
     currvalue = 0;
     main.textContent = currvalue;
     message.textContent = "Oh... The Value is Reset to 'Zero'";
});

message.addEventListener('')

