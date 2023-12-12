const linksURL = "data/products.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayData(data.products);
}

getLinks();

const displayData = (products) => {
    const content = document.querySelector("#products");

    products.forEach((product) => {
        let link = document.createElement('a');
        let card = document.createElement('div');
        let type = document.createElement('h3');
        let maker = document.createElement('p');
        let model = document.createElement('p');
        let prices = document.createElement('p');
        let photo = document.createElement('img');
        type.textContent = product.type;
        if (product.type != "Jeep") {
            maker.textContent = product.maker + " " + product.model + " (Max. Persons: " + product.capacity + ")";
        } else {
            maker.textContent = product.model + " (Max. Persons: " + product.capacity + ")";
        }
        prices.textContent = "Half Day (3h): USD " + product.resprice + " / Full Day: USD " + product.resprice1day;
        photo.setAttribute('src', product.photo);
        link.setAttribute('href', './reservations.html');
        card.appendChild(type);
        card.appendChild(maker);
        card.appendChild(photo);
        card.appendChild(prices);
        link.appendChild(card);
        card.classList.add("card");
        content.appendChild(link);
    })
};
