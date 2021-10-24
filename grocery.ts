console.log("reading")

class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

let itemslist = [
    new Grocery("waffles", 3, 10),
    new Grocery("juice", 6, 25),
    new Grocery("avocados", 11, 10)
]

// access the html element with id app
const ele = document.getElementById("list");

// create name <price> element for each item in the grocery list and
// append it to the html page
itemslist.forEach(e => {
    
    const price = document.createElement("price");
    price.textContent = `${e.name} ${e.quantity} $${e.price} /n`;
    ele.appendChild(price);
});
