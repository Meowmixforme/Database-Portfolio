//BASICS (Windows)


// To open MongoShell In CMD

mongosh

// To specify a specific port

mongosh --port 27018

// To see existing databases

show dbs

// To switch to Database (Even if it doesn't exist yet)

use shop

// To add data to the database

db.products.insertOne({name: "A Book", price: 12.99})

// Find data in database

db.products.find().pretty()

// Add a second product with description

db.products.insertOne({name: "A T-Shirt", price: 29.99, description: "This is a high quality T-Shirt"})

// Add a third document with an embedded document

db.products.insertOne({name: "A Computer", price: 1229.99, description: "A high quality computer", details :{cpu: "Intel i7 8770", memory: 32}}) 

// To delete database entries

db.products.deleteOne({name: "A Computer", price: 1229.99, description: "A high quality computer", details :{cpu: "Intel i7 8770", memory: 32}})

or 

db.products.deleteMany({marker: "toDelete"}) - must have something in common to delete (see next command)


// To update a document or many

db.products.updateOne({description: "A high quality computer"}, {$set: {marker: "delete"}}) - atomic operator $set:

db.products.updateMany({}, {$set: {marker: "toDelete"}}) - atomic operator $set: