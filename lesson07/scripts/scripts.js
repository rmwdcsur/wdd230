const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Event listener for Add Chapter button
button.addEventListener('click', () => {
    if (input.value != '') {
        let chapter = getChapterNumber(input.value);
        if (chapter > 0 && chapter < 64) {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = "";
            // Event listener for Delete button
            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
            });
            input.focus();

        } else {
            window.alert("You must include a chapter number or the chapter number is invalid!")
        }
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

// Function to extract numbers
function getChapterNumber(aString) {

    // Using match with regEx
    let matches = aString.match(/(\d+)/);

    // Display output if number extracted
    if (matches) {
        //console.log(matches[0]);
        return matches[0];
    }
};

//function to display chapters in the list
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
};

// Function to store user data in local storage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

// function to get data from localstorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

// function to delete chapter
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
};