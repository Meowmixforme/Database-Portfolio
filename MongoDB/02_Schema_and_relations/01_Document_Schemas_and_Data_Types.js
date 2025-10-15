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



// Data Types

// drop the database test

use test

db.dropDatabase()

// create a new database and populate with a company

use companyData

db.companies.insertOne({name: "Fresh Apples Inc", isStartup: true,employees: 33, funding: NumberDecimal("12345678901234567890"), details: {ceo: "James Super",tags: [{ title: "super" }, { title: "perfect" }], foundingDate: new Date(), insertedAt: Timestamp(Math.floor(Date.now() / 1000), 1)}})


db.companies.findOne()

// create numbers database and use  db stats to see database information

db.numbers.insertOne({a: NumberInt(1)})

db.stats()

db.companies.drop()

// to see the type of data in numbers

typeof db.numbers.findOne().a

