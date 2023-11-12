const linksURL = "data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayData(data.members);
}

getLinks();

const displayData = (members) => {
    const content = document.querySelector("article");

    members.forEach((member) => {
        let section = document.createElement('section');
        let title = document.createElement('h3');
        let p = document.createElement('p');
        let description = document.createElement('p');
        title.textContent = member.organization;
        p.textContent = member.name + " " + member.lastname;
        description.textContent = member.title;

        section.appendChild(title);
        section.appendChild(p);
        section.appendChild(description);
        section.classList.add("directorysection");
        content.appendChild(section);
    })
};


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("directorygrid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("directorygrid");
}
