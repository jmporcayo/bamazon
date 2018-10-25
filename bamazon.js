var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_DB"
});

var products = [];
var total = 0;

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    marketProducts();
});

// function which prompts the user for what action they should take
//The first should ask them the ID of the product they would like to buy.
//The second message should ask how many units of the product they would like to buy.

function start() {
    inquirer
        .prompt([{
                productId: "product ID",
                type: "input",
                choices: function () {
                    var choiceArray = [];
                    for (var i = 0; i < products.length; i++) {
                        choiceArray.push(products[i].product_name);
                    }
                    return choiceArray;
                },
                message: "Enter ID of the product you would like to purchase",
                name: "product_id"
            },
            {
                name: "quantity",
                type: "input",
                message: "Enter units of product for purchase"
            }

        ])
        .then(function (answers) {
            // console.log('answers is '+ JSON.stringify(answers));
            // console.log('products are'+ JSON.stringify(products))
            var orderQuantity = parseInt(answers.quantity);
            var orderID = answers.product_id;
            // console.log(orderID)

            for (var j = 0; j < products.length; j++) {
                if (parseInt(orderID) === parseInt(products[j].item_id)) {
                    console.log(orderQuantity)
                    if (parseInt(products[j].stock_quantity) < parseInt(orderQuantity)) {
                        console.log("Insufficient Quantity!")
                        console.log("Order not placed")
                        console.log("Please try another quantity!");
                        start();

                    } else {
                        console.log('worked');
                        updatePrice(products[j].price, orderQuantity);
                        updateInventory(products[j].item_id, products[j].stock_quantity - orderQuantity)
                    }
                };
            }
        })
}




// function to handle posting new items up for auction
function marketProducts() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        products = results;
        console.log("name: ", "product id: ", "price: ", "quantity: ");
        for (var i = 0; i < results.length; i++) {
            var product = results[i];
            console.log(product.product_name + "  " + product.item_id + "  " + product.price + "  " + product.stock_quantity)
        }
        start();

    })
}

function updateInventory(id, updatedQuantity) {
    console.log('Updating inventory...');
    console.log('......................');
    console.log('INVENTORY UPDATED!');
    connection.query("UPDATE `products` SET `stock_quantity` = '" + updatedQuantity + "' WHERE `item_id` = '" + id + "'");
    marketProducts();


}

function updatePrice(price, quantity) {
    total += price * quantity;
    console.log("Total: " + total);
}