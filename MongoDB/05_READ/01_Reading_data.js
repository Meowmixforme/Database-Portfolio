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


// Querying Embedded Fields and Arrays


db.movies.find({"rating.average": {$gt: 7}}).pretty()

db.movies.find({genres: "Drama"}).pretty()

db.movies.find({genres: ["Drama"]}).pretty() - just drama genre

// $in and $nin

db.movies.find({runtime: {$in: [30, 42]}}).pretty() - equals

db.movies.find({runtime: {$nin: [30, 42]}}).pretty() does not equal numbers in array

// $or and $nor

db.movies.find({$or: [{"rating.average": {$lt: 5}}, {"rating.average": {$gt: 9.3}}]}).pretty() - either

db.movies.find({$nor: [{"rating.average": {$lt: 5}}, {"rating.average": {$gt: 9.3}}]}).pretty() - neither

// $and

db.movies.find({$and: [{"rating.average": {$gt: 9}}, {genres: "Drama"}]}).pretty()

db.movies.find({$and: [{genres: "Drama"} , {genres: "Horror"}]}).pretty()


// $ not

db.movies.find({runtime: {$not: {$eq: 60}}}).pretty()

