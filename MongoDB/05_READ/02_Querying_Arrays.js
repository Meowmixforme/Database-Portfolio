// Querying Arrays

use user

db.users.find({"hobbies.title": "Sports"}).pretty()

// $size

db.users.insertOne({name: "Chris", hobbies: ["Sports", "Cooking", "Hiking"]})

db.users.find({hobbies: {$size: 3}}).pretty() - all users who have three hobbies (Chris) - must be exact number

// $all

use boxOffice

db.movieStarts.find({genre: {$all: ["action", "thriller"]}}).pretty() - genre of exactly 'thriller' and 'action', don't care about the order

// $elemMatch

use user

db.users.find({$and: [{"hobbies.title": "Sports"}, {"hobbies.frequency": {$gte: 3}}]}).pretty() - finds all documents with sports and document with frequncy >= 3

db.users.find({hobbies: {$elemMatch: {title: "Sports", frequency: {$gte: 3}}}}).pretty()


// Assignment

mongoimport boxoffice-extended.json -d boxOffice -c exmoviestarts --drop --jsonArray

use boxOffice

show collections

db.exmoviestarts.find().pretty()

// Find all movies with exactly two genres

db.exmoviestarts.find({genre: {$size: 2}}).pretty()

// Find all movies which aired in 2018

db.exmoviestarts.find({"meta.aired": 2018}).pretty()

// Find all movies that have at least one element in the ratings array that is greater than 8 but lower than 10

db.exmoviestarts.find({ratings: {$elemMatch: {$gt: 8, $lt: 10}}}).pretty()
