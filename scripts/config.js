function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // + tranforms string to number
    backdropElement.style.display = 'block';
    playerConfigOverlayElement.style.display = 'block';
}

function closePlayerConfig() {
    backdropElement.style.display = 'none';
    playerConfigOverlayElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    // formElement.firstElementChild.lastElementChild.value= '';
    playername.value = '';
}

//submit button

function savePlayerConfig(event) {
    event.preventDefault(); //prevent reload of the page
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('username').trim();

    if(!enteredPlayerName){  // enteredPlayername === ''
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Please enter a valid name';
        return;
     }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    // if (editedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     players[1].name = enteredPlayerName;
    // }

    players[editedPlayer-1].name = enteredPlayerName;

    closePlayerConfig();
}   

