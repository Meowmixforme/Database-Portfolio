// findOne() 

use movieData

db.movies.findOne() - first document

db.movies.findOne({name: "The Last Ship"}) - filter equality


// find()

db.movies.find().pretty() 

db.movies.find({runtime: 60}) - filter equality

//