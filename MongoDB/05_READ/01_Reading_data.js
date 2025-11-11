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

// Element operators $exists $type

use user

db.users.insertMany([{name: "James", hobbies: [{title: "Guitar", frequency: 4}, {title: "Cooking", frequency: 6}], phone: 012345678}, {name: "Thomas", hobbies: [{title: "Sports", frequency: 3}, {title: "Cooking", frequency: 6}], phone: "098765432", age: 30}])


db.users.find({age: {$exists: true, $gte: 30}}).pretty() - only one user has the age field

db.users.insertOne({name: "Gilbert", hobbies: [{title: "Internet forum complainer", frequency: 7}, {title: "Yoga", frequency: 1}], phone: "123456789", age: null})

db.users.find({age: {$exists: true, $ne: null}}).pretty() - only users whose age is not null


// $type

db.users.find({phone: {$type: "number"}}).pretty() - only users with phone numbers saved as a number and not a string (double works too)

db.users.find({phone: {$type: ["double", "string"]}}).pretty() - accepts both types



// Evaluation operators

// $regex - search text for patterns

use movieData

db.movies.find({summary: {$regex: /musical/}}).pretty()

// $exp - compare two fields inside of one document and return all documents which match this result

use financialData

db.sales.insertMany([{volume: 100, target: 120}, {volume: 89, target: 80}, {volume: 200, target: 177}])

db.sales.find({$expr: {$gt: ["$volume", "$target"]}}).pretty() - only find documents where volume is greater than target

db.sales.find({$expr: {$gt: [{$cond: {if: {$gte: ["$volume", 190]}, then: {$subtract: ["$volume", 10]}, else: "$volume"}}, "$target"]}}).pretty() - conditional value if vol > 190 difference must be at least 10 (can dynamically change 10 to another number)

// Assignment

// import data

mongoimport --file boxoffice.json --db boxOffice --collection movieStarts --jsonArray --drop

use boxOffice

db.movieStarts.find({"meta.rating": { $gt: 9.2}, "meta.runtime": { $lt: 100}}).pretty()

db.movieStarts.find({$or: [{genre: "drama"}, {genre: "action"}]}).pretty()

db.movieStarts.find({$expr: {$gt: ["$visitors", "$expectedVisitors"]}}).pretty()
