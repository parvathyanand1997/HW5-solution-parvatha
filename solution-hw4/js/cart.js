let cart =[];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let order1 = new Roll('Original','Sugar Milk', 1, 2.49);
let order2 = new Roll('Walnut','Vanilla Milk' , 12 , 3.49);
let order3 = new Roll('Raisin' , 'Sugar Milk' , 3 , 2.99);
let order4 = new Roll('Apple' , 'Keep Original' , 3 , 3.49);

cart.push(order1,order2,order3,order4);
console.log(cart);



for (let i = 0 ; i < cart.length ; i++) {

    let tempItem = document.getElementsByTagName("template")[0];
    let tempClone = tempItem.content.cloneNode(true);
    
    console.log(tempClone);

    tempClone.querySelector(".details").innerText = cart[i].type + " Cinnamon Roll";
    tempClone.querySelector(".glazing").innerText = "Glazing: " + cart[i].glazing;
    tempClone.querySelector(".pack-size").innerText = "Pack size: " + cart[i].size;
    tempClone.querySelector(".order img").src = rolls[cart[i].type].imageFile;
    tempClone.querySelector(".order img").alt = cart[i].type + " Cinnamon Roll";
}

