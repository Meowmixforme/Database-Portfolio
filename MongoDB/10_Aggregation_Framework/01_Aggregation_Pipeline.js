// Aggregation Pipeline

// Import the sata (all random dummy data)

mongoimport persons.json -d analytics -c persons --jsonArray


use analytics

show collections

db.persons.findOne()