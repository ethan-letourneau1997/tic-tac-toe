


// gameBoard Object



var gameBoard = (() => {

    let board = ['','','','','','','','','']; // creates array for player moves

    var createBoard = (() => {
        let gameBoard = document.getElementById('gameboard');
        for(i = 0; i < 9; i++) {
            const newBox = document.createElement('div');
            newBox.setAttribute('class', 'box');
            newBox.setAttribute('id', 'box' + i );
            newBox.innerHTML = ''; //change back to ' ' 
            gameBoard.appendChild(newBox);

            const newMoveButton = document.createElement('button');
            newMoveButton.setAttribute('class', 'move-button');
            newMoveButton.setAttribute('id', 'button' + i );
            newBox.appendChild(newMoveButton);
        };
    });

    createBoard();


    const updateArray = (pos, value) => {
        board[pos] = value;
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




// gameplay

var gameplay = (() => {

    // links HTML buttons to JS elements
    let button1 = document.getElementById('button0');
    let button2 = document.getElementById('button1');
    let button3 = document.getElementById('button2');
    let button4 = document.getElementById('button3');
    let button5 = document.getElementById('button4');
    let button6 = document.getElementById('button5');
    let button7 = document.getElementById('button6');
    let button8 = document.getElementById('button7');
    let button9 = document.getElementById('button8');

    // adds event listeners to board squares
    button1.addEventListener('click', function(){changeBox(button1, 0), winChecker()});
    button2.addEventListener('click', function(){changeBox(button2, 1), winChecker()});
    button3.addEventListener('click', function(){changeBox(button3, 2), winChecker()});
    button4.addEventListener('click', function(){changeBox(button4, 3), winChecker()});
    button5.addEventListener('click', function(){changeBox(button5, 4), winChecker()});
    button6.addEventListener('click', function(){changeBox(button6, 5), winChecker()});
    button7.addEventListener('click', function(){changeBox(button7, 6), winChecker()});
    button8.addEventListener('click', function(){changeBox(button8, 7), winChecker()});
    button9.addEventListener('click', function(){changeBox(button9, 8), winChecker()});

    // updates array
    let lastClicked = 'O';
    function changeBox (clicked, x){
        if (clicked.innerHTML == '') {
            if (lastClicked == 'O'){
            clicked.innerHTML = 'X';
            gameBoard.updateArray(x, 'X')
            return lastClicked = 'X';
            }
            else {
            clicked.innerHTML = 'O';
            gameBoard.updateArray(x, 'O')
            return lastClicked = 'O';
            }
        } return {
            lastClicked
        }
    } 
    return {
        lastClicked,
    }

    // checks for win conditions
    function winChecker() {
        if((gameBoard.board[0] == 'X' && 
            gameBoard.board[1] == 'X' &&
            gameBoard.board[2] == 'X') ||
            (gameBoard.board[0] == 'O' && 
            gameBoard.board[1] == 'O' &&
            gameBoard.board[2] == 'O')) {
                console.log('player win');
        } 
        else if ((gameBoard.board[3] == 'X' && 
            gameBoard.board[4] == 'X' &&
            gameBoard.board[5] == 'X') ||
            (gameBoard.board[3] == 'O' && 
            gameBoard.board[4] == 'O' &&
            gameBoard.board[5] == 'O')) {
                console.log('player win');
        }
        else if ((gameBoard.board[6] == 'X' && 
            gameBoard.board[7] == 'X' &&
            gameBoard.board[8] == 'X') ||
            (gameBoard.board[6] == 'O' && 
            gameBoard.board[7] == 'O' &&
            gameBoard.board[8] == 'O')) {
                console.log('player win');
    }
        else if ((gameBoard.board[0] == 'X' && 
            gameBoard.board[3] == 'X' &&
            gameBoard.board[6] == 'X') ||
            (gameBoard.board[0] == 'O' && 
            gameBoard.board[3] == 'O' &&
            gameBoard.board[6] == 'O')) {
                console.log('player win');
    }
        else if ((gameBoard.board[1] == 'X' && 
            gameBoard.board[4] == 'X' &&
            gameBoard.board[7] == 'X') ||
            (gameBoard.board[1] == 'O' && 
            gameBoard.board[4] == 'O' &&
            gameBoard.board[7] == 'O')) {
                console.log('player win');
    }
        else if ((gameBoard.board[2] == 'X' && 
            gameBoard.board[5] == 'X' &&
            gameBoard.board[8] == 'X') ||
            (gameBoard.board[2] == 'O' && 
            gameBoard.board[5] == 'O' &&
            gameBoard.board[8] == 'O')) {
                console.log('player win');
        }
        else if ((gameBoard.board[0] == 'X' && 
            gameBoard.board[4] == 'X' &&
            gameBoard.board[8] == 'X') ||
            (gameBoard.board[0] == 'O' && 
            gameBoard.board[4] == 'O' &&
            gameBoard.board[8] == 'O')) {
                console.log('player win');
    }
        else if ((gameBoard.board[2] == 'X' && 
            gameBoard.board[4] == 'X' &&
            gameBoard.board[6] == 'X') ||
            (gameBoard.board[2] == 'O' && 
            gameBoard.board[4] == 'O' &&
            gameBoard.board[6] == 'O')) {
            console.log('player win');
        }
        else if(gameBoard.board[0] != '' &&
            gameBoard.board[1] != '' &&
            gameBoard.board[2] != '' &&
            gameBoard.board[3] != '' &&
            gameBoard.board[4] != '' &&
            gameBoard.board[5] != '' &&
            gameBoard.board[6] != '' &&
            gameBoard.board[7] != '' &&
            gameBoard.board[8] != '' ){
                console.log('tie')
        }
    }
})();

// player module 




















