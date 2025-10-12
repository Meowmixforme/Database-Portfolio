// Create new database (or use previous shop example)

use shop

// add a product (chaotic schema)

db.products.insertOne({name: "A book", price: 12.99})

// add another product with different values

db.products.insertOne({title: "T-Shirt",seller: {name: "James", age: 43}})

// Delete database contents

db.products.deleteMany({})

// Schema fixed type type

db.products.insertOne({name: "A book", price: 12.99})

db.products.insertOne({name: "T-Shirt", price: 20.99})


// Schema mixed type 

db.products.insertOne({name: "A Computer", price: 1299, details: {cpu: "Intel i7 8770"}}) - has same as fixed (except int price) and an extra field

// Delete database contents

db.products.deleteMany({})

// SQL type (fixed) Assign null value for details

db.products.insertOne({name: "A book", price: 12.99, details: null})

db.products.insertOne({name: "T-Shirt", price: 20.99, details: null})

db.products.insertOne({name: "A Computer", price: 1299, details: {cpu: "Intel i7 8770"}})