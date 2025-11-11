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

