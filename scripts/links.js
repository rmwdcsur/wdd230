const baseURL = "https://rmwdcsur.github.io/wdd230/";

const linksURL = "https://rmwdcsur.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons);
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (weeks) => {
    const list = document.getElementById("list");

    weeks.forEach((week) => {
        let listItem = document.createElement('li');
        listItem.textContent = "Week " + week.lesson + ": ";
        for (let i = 0; i < week.links.length; i++) {
            console.log(week.links[i].title);
            console.log(week.links[i].url);
            let alink = document.createElement('a');
            alink.href = week.links[i].url;
            if (i == 1) {
                alink.text = week.links[i].title;
            } else {
                alink.text = week.links[i].title + ' | ';
            }
            listItem.appendChild(alink);

        }
        list.appendChild(listItem);
        // console.log(week.links[0]);
    });
}