const getData = async () => {
    const resp = await fetch("/JS/data.json")
    const data = await resp.json();
    return data;
}

const loadCards = async (Card) => {
    const main = document.getElementById("galery");

    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.className = "title";
    title.innerHTML = Card.name;
    
    const img = document.createElement("img");
    img.src = Card.url;
    
    const date = document.createElement("h2");
    date.className = "date";
    date.innerHTML = Card.date;
    
    const divInfo = document.createElement("div");
    
    const info = document.createElement("p");
    info.innerHTML = Card.description;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(date);
    divInfo.appendChild(info);
    card.appendChild(divInfo);

    main.appendChild(card);
}

const execute = async () => {
    const data = await getData();
    data.forEach(element => {
        loadCards(element);
    });

}

execute();
