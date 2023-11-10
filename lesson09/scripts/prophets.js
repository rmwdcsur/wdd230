// URL of JSON source data
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('div.cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetData();


const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let cardbody = document.createElement('div');
        let fullName = document.createElement('h2'); // fill in the blank
        let data = document.createElement('p');
        let portrait = document.createElement('img');

        // Add card styles
        card.setAttribute("class", "card");
        cardbody.setAttribute("class", "card-body");

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        // other data
        data.textContent = `Birthdate: ${prophet.birthdate} | Birthplace: ${prophet.birthplace}`

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(data);
        card.appendChild(portrait);


        cards.appendChild(card);
    });
}