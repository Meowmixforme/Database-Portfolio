// Assignment

// import data

mongoimport --file boxoffice.json --db boxOffice --collection movieStarts --jsonArray --drop

use boxOffice

db.movieStarts.find({"meta.rating": { $gt: 9.2}, "meta.runtime": { $lt: 100}}).pretty()

db.movieStarts.find({$or: [{genre: "drama"}, {genre: "action"}]}).pretty()

db.movieStarts.find({$expr: {$gt: ["$visitors", "$expectedVisitors"]}}).pretty()

// Querying_Arrays

use user

db.users.find({"hobbies.title": "Sports"}).pretty()

// $size

db.users.insertOne({name: "Chris", hobbies: ["Sports", "Cooking", "Hiking"]})

db.users.find({hobbies: {$size: 3}}).pretty() - all users who have three hobbies (Chris) - must be exact number

// $all

use boxOffice

db.movieStarts.find({genre: {$all: ["action", "thriller"]}}).pretty() - genre of exactly 'thriller' and 'action', don't care about the order

