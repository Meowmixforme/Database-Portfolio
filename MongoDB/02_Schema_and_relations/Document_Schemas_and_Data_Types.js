// Create new database (or use previous shop example)

use shop

// add a product

db.products.insertOne({name: "A book", price: 12.99})

// add another product

db.products.insertOne({title: "T-Shirt",seller: {name: "James", age: 43}})

