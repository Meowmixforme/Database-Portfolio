// Aggregation Pipeline

// Import the sata (all random dummy data)

mongoimport persons.json -d analytics -c persons --jsonArray


use analytics

show collections

db.persons.findOne()

// Match

db.persons.aggregate([{$match: {gender: "female"}}]).pretty() - only show females 

// Group

db.persons.aggregate([
    { $match: { gender: 'female' } },
    { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } }
]).pretty(); - total number of females by their state 

db.persons.aggregate([
    { $match: { gender: 'female' } },
    { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } },
    { $sort: { totalPersons: -1 } }
]).pretty(); - sort by total people (descending)

// Assignment



