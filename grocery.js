console.log("reading");
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var itemslist = [
    new Grocery("waffles", 3, 10),
    new Grocery("juice", 6, 25),
    new Grocery("avocados", 11, 10)
];
// access the html element with id app
var ele = document.getElementById("list");
// create name <price> element for each item in the grocery list and
// append it to the html page
itemslist.forEach(function (e) {
    var price = document.createElement("price");
    price.textContent = e.name + " " + e.quantity + " $" + e.price + " /n";
    ele.appendChild(price);
});
