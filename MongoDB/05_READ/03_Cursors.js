// Cursors

// Applying Cursors

use movieData

db.movies.find().count()

db.movies.find().next() - shows next document

const dataCursor = db.movies.find() - create a cursor

dataCursor.next() - next document (can use again for the document there after)

dataCursor.forEach(doc => {printjson(doc)}) - cycle through all docs in cursor and fetch (not just first 20)

dataCursor.hasNext - checks to see if the cursor is exhausted (will error (or null) if exhausted and you run dataCursor.next() when exhausted)

// Sorting Cursor results

db.movies.find().sort({"rating.average": 1, runtime: -1}).pretty() - sort by rating average 1 = ascending, -1 = descending, rating first then by runtime

// Skipping and limiting Cursor results

db.movies.find().sort({"rating.average": 1, runtime: -1}).skip(10).pretty() - skip first 10 results

db.movies.find().sort({"rating.average": 1, runtime: -1}).limit(10).pretty() - limit to 10 documents

db.movies.find().sort({"rating.average": 1, runtime: -1}).skip(10).limit(10).pretty() - both (skip then limit)

// Using projection to shape results

db.movies.find({}, {name: 1, genres: 1, rating: 1}).pretty() - only fields listed with 1 are shown (plus the id)

db.movies.find({}, {name: 1, genres: 1, "rating.average": 1, "schedule.time": 1}).pretty() - embedded

// Using projection in Arrays

db.movies.find({genres: "Drama"}, {"genres.$": 1}).pretty() - only shows Drama

db.movies.find({genres: {$all: ["Drama", "Horror"]}}, {"genres.$": 1}).pretty() - only retrieve Horror

db.movies.find({genres: "Drama"}, {genres: {$elemMatch: {$eq: "Horror"}}}).pretty() - control which items in an array are displayed

db.movies.find({"rating.average": {$gt: 9}}, {genres: {$elemMatch: {$eq: "Horror"}}}).pretty() - with rating greater than 9

// $slice

db.movies.find({"rating.average": {$gt: 9}}, {genres: {$slice: 2}, name: 1}).pretty() - List of items with only first two elements

db.movies.find({"rating.average": {$gt: 9}}, {genres: {$slice: [1, 2]}, name: 1}).pretty() - skips first item and returns items 2 and 3

