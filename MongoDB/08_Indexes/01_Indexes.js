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