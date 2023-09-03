const movieSelect = document.querySelector('#movie');
const countSpanElement = document.querySelector('#count');
const totalSpanElement = document.querySelector('#total');

let moviePrice = 0;
let totalmoviePrice = 10;
let count = 0;


const rows = document.querySelectorAll('.row');

Object.values(rows).forEach(row => {
    row.addEventListener('click', (e) => {
        const element = e.target;
        if (element.classList.value.includes("selected")) {
            element.classList.toggle("selected");
            count--;
        } else {
            element.classList.toggle("selected");
            count++;
        }
        countSpanElement.innerHTML = count ;
        totalSpanElement.innerHTML = count * totalmoviePrice;
    });
});

movieSelect.addEventListener('change', (e) => {
    totalmoviePrice = e.target.value;
    totalSpanElement.innerHTML = count * totalmoviePrice;
});

