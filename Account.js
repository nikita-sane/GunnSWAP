class Account {
    constructor(name, idNumber, credits) {
        this.credits = credits;
        this.name = name;
        this.idNumber = idNumber;
        this.itemsSold = [];
    }

    sellItem(clothing) {
        this.itemsSold.push(clothing);
        Main.allItems.push(clothing);
        this.credits += clothing.getItemPrice();
    }

    buyItem(clothing) {
        this.credits -= clothing.getItemPrice();
        const clothingIndex = Main.allItems.indexOf(clothing);
        if (clothingIndex !== -1) {
            Main.allItems.splice(clothingIndex, 1);
        } else {
            console.log("This item is not available to buy!");
        }
    }

    getName() {
        return this.name;
    }

    getCredits() {
        return this.credits;
    }

    getId() {
        return this.idNumber;
    }

    printItemsSold() {
        for (let i = 0; i < this.itemsSold.length; i++) {
            console.log("Item: " + this.itemsSold[i].getItemName());
            console.log("Price: " + this.itemsSold[i].getItemPrice());
            console.log("Description: " + this.itemsSold[i].getItemDescription());
            console.log();
        }
    }
}

// Assuming Main.allItems is a global variable in your JavaScript context.
