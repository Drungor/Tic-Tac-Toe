function openPlayerConfig() {
    backdropElement.style.display = 'block';
    playerConfigOverlayElement.style.display = 'block';
}

function closePlayerConfig() {
    backdropElement.style.display = 'none';
    playerConfigOverlayElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
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
}
