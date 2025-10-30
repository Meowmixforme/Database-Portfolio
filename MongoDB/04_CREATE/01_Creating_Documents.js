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

db.hobbies.insertMany([{_id: "sports", name: "Sports"}, {_id: "cooking", name: "Cooking"}, {_id: "cars", name: "Cars"}])

db.hobbies.find().pretty()

// will fail for last 2 as _id "cooking" already exists (duplicate key). Yoga will insert but fail and stop after cooking.

db.hobbies.insertMany([{_id: "yoga", name: "Yoga"}, {_id: "cooking", name: "Cooking"}, {_id: "hiking", name: "Hiking"}])

db.hobbies.find().pretty()

// to override behaviour disable ordered insert. It now fails for first two duplicates but will add Hiking instead of quitting 

db.hobbies.insertMany([{_id: "yoga", name: "Yoga"}, {_id: "cooking", name: "Cooking"}, {_id: "hiking", name: "Hiking"}], {ordered: false})


// writeConcern

use contactData

db.persons.find().pretty()

// w:0 = fast but no aknowledgement, w:1 = default and gives an aknowledgement

db.persons.insertOne({name: "Chrissy", age: 41}, {writeConcern: {w: 1}})

// journal default is false j: false, true adds to journal

db.persons.insertOne({name: "Michael", age: 51}, {writeConcern: {w: 1, j: false}})

db.persons.insertOne({name: "Michaela", age: 51}, {writeConcern: {w: 1, j: true}})

db.persons.insertOne({name: "Aliya", age: 22}, {writeConcern: {w: 1, j: true, wtimeout: 200}})





