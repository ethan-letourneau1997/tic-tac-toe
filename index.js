


// gameBoard Object



var gameBoard = (() => {

    let board = []; // creates array for player moves

    var createBoard = (() => {
        let gameBoard = document.getElementById('gameboard');
        for(i = 0; i < 9; i++) {
            const newBox = document.createElement('div');
            newBox.setAttribute('class', 'box');
            newBox.setAttribute('id', 'box' + i );
            newBox.innerHTML = '';
            gameBoard.appendChild(newBox);
        };
    });

    createBoard();

    const updateArray = (move) => {
        board.push(move);
            // // let identity = 'box'+i;
            
            // function updateBoard(box){
            //      return box.innerHTML = 'S';
            // }
            // updateBoard();
        return board;
    }

    const createBox = (() => {
        let box = document.getElementById(('box5'));
        box.innerText = 'Q'
        console.log(box.innerHTML);
    })

    return {
        createBoard,
        board,
        updateArray,
        createBox,

    };
})();




// boardcell assignments


// gameBoard.updateArray('Q', 'O', 'X' , 'X', 'O', 'X', 'O', 'O', 'X');

let box1 = document.getElementById('box4');
box1.innerHTML = 'Q';

gameBoard.createBox();



