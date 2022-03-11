const gameboard = document.querySelector('.container');

// Create grid
function makeGrid(size){
    let hw = 500/size;
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let div = document.createElement('div');
            gameboard.append(div);
            div.className = 'square';
            div.style.height = `${hw}px`;
            div.style.width = `${hw}px`;
        }
        
    }
    // Color squares
    let squares = document.querySelectorAll('.square');
    for (let i=0; i < squares.length; i++){
        squares[i].addEventListener('mouseover', function(){
            squares[i].classList.add('draw');
        });
    }

    // Reset gameboard
    let button = document.querySelector('.reset');
    button.addEventListener('click', function(){
        for (let i = 0; i<squares.length; i++) {
            squares[i].classList.remove('draw');
        }
    })
}

document.querySelector('#size').addEventListener('input', function(){
    while (gameboard.firstChild){
        gameboard.removeChild(gameboard.firstChild);
    }
    let size = document.querySelector('#size').value;
    makeGrid(size);
});
