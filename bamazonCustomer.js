var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'nodeuser',
    password: 'nodeuser@1234',
    database: 'bamazon',
    insecureAuth: true
});

connection.connect();
connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    for (var i = 0; i < results.length; i++) {
        var item = results[i];
        if (item.stock_quantity > 0) {
            console.log(item.item_id + '. ' + item.product_name + '  $' + item.price);
        }
    }
    console.log('');
});

inquirer
    .prompt([{
        name: 'id',
        message: 'Please type the id you would like to buy:'
    },
    {
        name: 'quantity',
        message: 'How many would you like to buy?'
    }])
    .then(answers => {
        connection.query('SELECT * FROM products WHERE item_id = ' + answers.id, function (error, results, fields) {
            if (error) throw error;
            if (results === '[]') {
                console.log('Wrong id typed!');
                return;
            }
            if (results[0].stock_quantity < answers.quantity) {
                console.log('Insufficent Quantity');
                return;
            }
            var remaining = Number(results[0].stock_quantity) - Number(answers.quantity);
            
            connection.query('UPDATE products SET stock_quantity=? WHERE item_id = ?',
            [remaining, answers.id],
            function (error) {
                if (error) throw error;
                console.log('Yes you got that!');
                connection.end();
            });
            
        });


    });