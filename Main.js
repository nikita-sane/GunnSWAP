class Account {
    constructor(name, id, credits) {
        this.name = name;
        this.id = id;
        this.credits = credits;
        this.itemsSold = [];
    }

    getName() {
        return this.name;
    }

    getCredits() {
        return this.credits;
    }

    getId() {
        return this.id;
    }

    printItemsSold() {
        for (let i = 0; i < this.itemsSold.length; i++) {
            console.log(this.itemsSold[i].getItemName());
        }
    }

    sellItem(item) {
        this.itemsSold.push(item);
        this.credits += item.getPrice();
    }

    buyItem(item) {
        const index = this.itemsSold.indexOf(item);
        if (index !== -1) {
            this.itemsSold.splice(index, 1);
            this.credits -= item.getPrice();
        }
    }
}

class Item {
    constructor(price, itemName, description, index) {
        this.price = price;
        this.itemName = itemName;
        this.description = description;
        this.index = index;
    }

    getPrice() {
        return this.price;
    }

    getItemName() {
        return this.itemName;
    }

    getDescription() {
        return this.description;
    }

    getIndex() {
        return this.index;
    }
}

const people = [];
const allItems = [];
let person = new Account("default", 950, 0);

function getPeople() {
    for (let i = 0; i < people.length; i++) {
        console.log("Name: " + people[i].getName());
        console.log("Credits: " + people[i].getCredits());
        console.log();
    }
}

function getAllItems() {
    for (let i = 0; i < allItems.length; i++) {
        console.log(allItems[i].getItemName() + ", ");
    }
    console.log();
}

function manageTasks() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        while (true) {
            console.log("Enter ID Number: ");
            rl.question("Enter ID Number: ", (userIdNum) => {
                const idNum = parseInt(userIdNum);
                for (let j = 0; j < people.length; j++) {
                    if (people[j].getId() === idNum) {
                        person = people[j];
                    }
                }

                while (true) {
                    console.log("[1] Show account details");
                    console.log("[2] Sell");
                    console.log("[3] Buy");
                    console.log("[4] Quit");
                    rl.question("Selection: ", (task) => {
                        if (task === "1") {
                            console.log("Name: " + person.getName());
                            console.log("Credits Available" + person.getCredits());
                            console.log("Items Sold: ");
                            console.log();
                            person.printItemsSold();
                        } else if (task === "2") {
                            rl.question("Item price: ", (price) => {
                                rl.question("Item name: ", (name) => {
                                    rl.question("Item description: ", (description) => {
                                        const priceInt = parseInt(price);
                                        const clothing = new Item(priceInt, name, description, allItems.length);
                                        person.sellItem(clothing);
                                    });
                                });
                            });
                        } else if (task === "3") {
                            rl.question("Item index: ", (index) => {
                                const ind = parseInt(index);
                                for (let i = 0; i < allItems.length; i++) {
                                    if (allItems[i].getIndex() === ind) {
                                        person.buyItem(allItems[i]);
                                    }
                                }
                            });
                        } else if (task === "4") {
                            rl.close();
                        } else {
                            console.log("Unknown request!");
                        }
                    });
                }
            });
        }
    } finally {
        rl.close();
    }
}

// Initial data setup
people.push(new Account("nikita", 95032924, 50));
people.push(new Account("melinda", 95039846, 20));
people.push(new Account("olivia", 95034422, 100));

manageTasks();
