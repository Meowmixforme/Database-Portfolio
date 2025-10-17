// One to One Relationships (embedded)

// Create database and insert a patient and a summary

use hospital

db.patients.insertOne({name: "James", age: 43, diseaseSummary: "Summary-james-1"})

db.diseaseSummaries.insertOne({_id: "Summary-james-1", diseases: ["colon cancer", "t2 diabetes"]})

// two-step lookup to retrieve disease information for a patient

var dsid = db.patients.findOne().diseaseSummary

dsid

db.diseaseSummaries.findOne({_id: dsid})

// Embedded lookup method

db.patients.deleteMany({})

db.patients.insertOne({name: "James", age: 43, diseaseSummary: {diseases: ["colon cancer", "t2 diabetes"]}})

db.patients.findOne()


// One to One References

use cardData

db.persons.insertOne({name: "James", car: {model: "BMW"}, price: 40000})

db.persons.deleteMany({})

db.persons.insertOne({name: "James", age: 43, salary: 3000})

db.cars.insertOne({model: "BMW", price: 40000, owner: ObjectId('68f036a92b1fb18d64cebea5')}) - ObjectId is of persons previously inserted


// One to Many (embedded)

use support

db.questionThreads.insertOne({creator: "James", question: "How does that all work?", answers: ["q1a1", "q1a2"]})

db.answers.insertMany([{_id: "q1a1", text: "It works like that."}, {_id: "q1a2", text: "Thanks!"}])

db.answers.find()

db.questionThreads.deleteMany({})

// embedding example

db.questionThreads.insertOne({creator: "James", question: "How does that all work?", answers: [{text: "Like that"}, {text: "Thanks!"}]})

db.questionThreads.findOne()


// One to Many References

use cityData

db.cities.insertOne({name: "New York City", coordinates: {lat: 21, lng: 55}})

db.cities.findOne({})

db.citizens.insertMany([{name: "James Smith", cityId: ObjectId('68f19ca1a69929fae3cebea4')}, {name: "John Phillips", cityId: ObjectId('68f19ca1a69929fae3cebea4')}]) - objectId given from inserting New York

db.citizens.find().pretty()


Many to Many (embedded)

//Sql approach example

use shop

db.products.insertOne({title: "A book", price: 12.99})

db.customers.insertOne({name: "James", age: 43})

db.orders.insertOne({productId: ObjectId('68f19fdba69929fae3cebea7'), customerId: ObjectId('68f19fe1a69929fae3cebea8')}) - Again, Ids taken from our generated customer and product

// Reference

db.orders.drop()

db.customers.updateOne({}, {$set: {orders: [{productId: ObjectId('68f19fdba69929fae3cebea7') , quantity: 2}]}})

// Embedded - disadvantage is data duplication

db.customers.updateOne({}, {$set: {orders: [{title: "A book", price: 12.99, quantity: 2}]}})

shop> db.customers.findOne()


// Many to Many References

// Not best method for this example (embedded)

use bookRegistry

db.books.insertOne({name: "My favourite book", authors: [{name: "David Lacey", age: 79}, {name: "Manuel Lor", age: 30}]})

db.authors.insertMany([{name: "David Lacey", age: 79, address: {street: "Main"}}, {name: "Manuel Lor", age: 30, address: {street: "Tree"}}])

// Best method (references) 

db.books.updateOne({}, {$set: {authors: [ObjectId('68f1a3d1a69929fae3cebeab'), ObjectId('68f1a3d1a69929fae3cebeac')]}})

db.books.findOne()



