// Delete Operations

// deleteOne() and deleteMany()

use users

db.users.deleteOne({name: "Chris"}) - delete Chris

db.users.deleteMany({totalAge: {$gt: 30}, isSporty: true}) - delete all people who have flag isSporty and totalAge > 30

db.users.deleteMany({totalAge: {$exists: false}, isSporty: true}) - delete all people whohave isSporty flag and totalAge doesn't exist

// Delete all entries in a collection

db.users.deleteMany({}) - deletes all documents in the collection

db.users.drop() - delete the entire collection

db.dropDatabase() - delete the current database (very rare use case)