// insert methods

mongosh

use test

db.dropDatabase()

use contactData

db.persons.insertOne({name: "James", age: 43, hobbies: ["Guitar", "Walking"]})

db.persons.insertOne({name: "David", age: 74, hobbies: ["Complaining", "Pooping"]})


db.persons.insertMany([{name: "Anna", age: 29, hobbies: ["Sports", "Yoga"]}])

db.persons.insertMany([{name: "Maria", age: 31,}, {name: "Chris", age: 25}])

db.persons.insert({name: "Phile", age: 35})

db.persons.find().pretty()

db.persons.insertMany([{name: "Sandeep", age: 28,}, {name: "Hans", age: 38}])

// ordered inserts

