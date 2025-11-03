// findOne() 

use movieData

db.movies.findOne() - first document

db.movies.findOne({name: "The Last Ship"}) - filter equality


// find()

db.movies.find().pretty() 

db.movies.find({runtime: 60}) - filter equality

// Comparison operators

db.movies.find({runtime: {$eq: 60}}) - equals

db.movies.find({runtime: {$ne: 60}}) - not equals

db.movies.find({runtime: {$lt: 40}}).pretty() - lower than

db.movies.find({runtime: {$lte: 42}}).pretty() - lower than or equal

db.movies.find({runtime: {$gte: 42}}).pretty() - greater than

db.movies.find({runtime: {$gte: 42}}).pretty() - greater than or equal


