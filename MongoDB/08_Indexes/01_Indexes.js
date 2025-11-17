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

db.contacts.getIndexes()

db.contacts.createIndex({"dob.age": 1}, {partialFilterExpression: {gender: "male"}}) - only ages of males are stored

db.contacts.createIndex({"dob.age2": 1}, {partialFilterExpression: {"dob.age": {$gt: 60}}}) - as an alternative

db.contacts.explain().find({"dob.age": {$gt: 60}}).pretty() - collection scan as only one part is listed

db.contacts.find({"dob.age": {$gt: 60}, gender: "male"}).pretty() - as both parts are listed it returns the correct index scan

db.users.insertMany([{name: "Max", email: "max@test.com"}, {name: "Manuel"}]) - create two documents but onyl one has an email

db.users.createIndex({email: 1}) - create index

db.users.dropIndex({email: 1}) - drop index

db.users.createIndex({email: 1}, {unique: true}) - create a unique index and it fails as Manuel has no email

db.users.createIndex({email: 1}, {unique: true, partialFilterExpression: {email: {$exists: true}}}) - to override the behaviour and allow no email

db.users.insertOne({name: "Anna"}) - I can insert a new user without an email. If i used an email already in there it will fail (max@test.com) 

db.users.find().pretty()

// Time-To-Live Index

db.sessions.insertOne({data: "dfsdfs", createdAt: new Date()}) - uses current timestamp

db.sessions.createIndex({createdAt: 1}) - to create a ttl index

db.sessions.dropIndex({createdAt: 1})

db.sessions.createIndex({createdAt: 1}, {expireAfterSeconds: 10}) - every element will be removed after 10 seconds (only applies to collection when new objects added after applying)

db.sessions.insertOne({data: "dfsdfs", createdAt: new Date()}) - new element and any existing will now delete after 10 seconds

// Covered queries (very fast)

db.customers.insertMany([{name: "Max", age: 29, salary: 3000}, {name: "Manuel", age: 30, salary: 4000}])

db.customers.createIndex({name: 1})

db.customers.explain("executionStats").find({name: "Max"}) - reqular index query

db.customers.explain("executionStats").find({name: "Max"}, {_id: 0, name: 1}) - covered query (only return fields which are the index fields)

// Using Multi-Key indexes

use contactData

db.contacts.drop() - drop the data we imported earlier from file

db.contacts.insertOne({name: "Max", hobbies: ["Cooking", "Sports"], addresses: [{street: "Main Street"}, {street: "Second Street"}]}) - hobbies is an Array

db.contacts.findOne()

db.contacts.createIndex({hobbies: 1})

db.contacts.explain("executionStats").find({hobbies: "Sports"}) - isMultiKey: true (as this is an index on an Array of values)

db.contacts.createIndex({addresses: 1})

db.contacts.explain("executionStats").find({"addresses.street": "Main Street"}) - collection scan because it is a nested document in an array

db.contacts.explain("executionStats").find({addresses: {street: "Main Street"}}) - ixscan as it matches the query (creates plan cache)

db.contacts.explain("executionStats").find({"addresses.street": "Main Street"}) - now the query uses an ixscan as the plan cache recognises it

// Text indexes



