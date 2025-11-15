// Indexes

// Import data

mongoimport persons.json -d contactData -c contacts --jsonArray --drop

use contactData

db.contacts.findOne()

db.contacts.find({"dob.age": {$gt: 60}}).pretty() - find all people older than 60

db.contacts.explain().find({"dob.age": {$gt: 60}}) - see what MongoDb did

db.contacts.explain("executionStats").find({"dob.age": {$gt: 60}}) - detailed output for query

db.contacts.createIndex({"dob.age": 1}) - create an index and sort ascending (can speed up executionTimeMills)

db.contacts.explain("executionStats").find({"dob.age": {$gt: 20}}) 

db.contacts.dropIndex({"dob.age": 1}) - remove index (can be faster for < 20 search as extra index step was removed)

// Compound indexes

db.contacts.createIndex({gender: 1})

db.contacts.explain("executionStats").find({gender: "male"})

db.contacts.dropIndex({gender: 1})

db.contacts.createIndex({"dob.age": 1, gender: 1}) - Compound = index with more than one field

db.contacts.explain().find({"dob.age": 35, gender: "male"}) query for males who are 35

db.contacts.explain().find({"dob.age": 35}) - just query age

// Using indexes for sorting

db.contacts.explain().find({"dob.age": 35}).sort({gender: 1}) - search for all males of 35 in an ascending order

// Default index

db.contacts.getIndexes() - see all indexes (default is id_1)

// Configuring indexes

db.contacts.createIndex({email: 1}, {unique: true}) - finds duplicate key for "abigail.clark@example.com"

db.contacts.find({email: "abigail.clark@example.com"}).count() - 2 people with the id

// Partial filters






