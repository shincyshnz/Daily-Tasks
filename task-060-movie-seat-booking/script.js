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
        if (element.classList.value.includes("occupied")) {
            return;
        }

        if (element.classList.value.includes("selected")) {
            element.classList.toggle("selected");
            count--;
        } else {
            element.classList.toggle("selected");
            count++;
        }
        countSpanElement.innerHTML = count;
        totalSpanElement.innerHTML = count * totalmoviePrice;
    });
});

movieSelect.addEventListener('change', (e) => {
    totalmoviePrice = e.target.value;
    totalSpanElement.innerHTML = count * totalmoviePrice;
});

// const fruits = [{ apple: 3 }, { banana: 3 }, { apple: 4 }]
// const sum = {};
// fruits.forEach(fruitObj =>{
//     for(const fruit in fruitObj){
//         if(sum.hasOwnProperty(fruit)){
//             sum[fruit] += fruitObj[fruit];
//         }else{
//             sum[fruit] = fruitObj[fruit];
//         }
//     }
// });
// console.log(sum);