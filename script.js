

const main = document.querySelector('#title');
const decremant = document.querySelector('#decre');
const  reset = document.querySelector('#reset');
const  increament = document.querySelector('#incre');
let currvalue = 0;


increament.addEventListener ('click', () => {
     currvalue++;

     main.textContent = currvalue;
});

decremant.addEventListener('click', () =>{
    currvalue--;
    main.textContent = currvalue;
});

reset.addEventListener ('click' ,() =>{
     currvalue = 0;
     main.textContent = currvalue;
});

