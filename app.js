const gameboard = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    gameboard.append(div);
    div.className = 'square';
}

let squares = document.querySelectorAll('.square');
for (let i=0; i < squares.length; i++){
    squares[i].addEventListener('mouseover', function(){
        squares[i].classList.add('draw');
    });
}

let button = document.querySelector('.reset');
button.addEventListener('click', function(){
    for (let i = 0; i<squares.length; i++) {
        squares[i].classList.remove('draw');
    }
})
