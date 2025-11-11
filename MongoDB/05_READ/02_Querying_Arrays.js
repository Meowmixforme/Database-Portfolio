// Querying_Arrays

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

