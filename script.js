let count = 0;

const NUM = document.getElementById('numero');

function increment (){
    count++;
    NUM.innerHTML = count;
}

function decrement (){
    count--;
    NUM.innerHTML = count;
}