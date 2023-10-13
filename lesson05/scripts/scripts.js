const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// Event listener for Add Chapter button
button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = "";
        // Event listener for Delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
    }
    else {
        window.alert("You must type a Book and Chapter!");
    }
});

// Event for Enter key pressed
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        button.click();
    }
});