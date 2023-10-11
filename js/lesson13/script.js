const root = document.getElementById("root");

fetch("https://62ab5f03a62365888bdaf8d0.mockapi.io/store")
    .then(response => response.json()) 
    .then((arr) => {
        arr.forEach(element => {
            const div = document.createElement("div");
            const spanName = document.createElement("span");
            const spanPrice = document.createElement("span");
            const img = document.createElement("img");

            spanName.textContent = element.name;
            spanPrice.textContent = element.price;
            img.src = element.image;

            div.append(spanName, spanPrice, img);
            root.append(div);
        });
    })
    .catch(() => console.log("Error catch"));
