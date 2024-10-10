function startNewGame () {
    if (players[0].name === '' ||players[1].name === '') {
        alert ('Please enter playernames');
        return;
    }
    activeGameElement.style.display = 'block';

    ActivePlayerNameElement.textContent = players[activePlayer].name;
    gameFieldElements.style.display = 'block';
}


function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }   
    ActivePlayerNameElement.textContent = players[activePlayer].name;
}


function selectGameField(event) {
    const selectedField = event.target;


    selectedField.textContent = players[activePlayer].symbol; // player [0]
    selectedField.classList.add('disabled');
   switchPlayer();

   const selectColum = selectedField.dataset.col
   const selectRow = selectedField.dataset.row

}