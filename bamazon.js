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

var product = [];

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
                type: "rawlist",
                choices: function () {
                    var choiceArray = [];
                    for (var i = 0; i < product.length; i++) {
                        choiceArray.push(products[i].item_name);
                    }
                    return choiceArray;
                },
                message: "Enter ID of the product you would like to purchase"
            },
            {
                name: "quantity",
                type: "input",
                message: "Enter units of product for purchase"
            }

        ])
        .then(function (answer) {
                console.log(answers);
                var orderQuantity = parseInt(answers.quantity);
                var orderID = answers.whatID;

                for (var j = 0; j < products.length; j++) {
                    if (orderID === products[j].item_name) {
                        if (products[j].stock_quantity < orderQuantity) {
                            console.log("Insufficient Quantity!")

                        } else
                            updateInventory(products[j].item_name, products.stock_quantiy - orderQuantity)
                    };
                }
            }
        }
)
}
// function to handle posting new items up for auction
function marketProducts() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        products = results;
        console.log("name: ", "product id: ", "price: ", "quantity: ");
        for (var i = 0; i < results.length; i++) {
            var product = results[i];
            console.log(product.item_name + "  " + product.item_id + "  " + product.price + "  " + product.stock_quantity)
        }
        start();

    })
}

function updateInventory(item_name, updatedQuantity) {


}