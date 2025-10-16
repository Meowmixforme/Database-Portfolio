// One to One Relationships (embedded)

// Create database and insert a patient and a summary

use hospital

db.patients.insertOne({name: "James", age: 43, diseaseSummary: "Summary-james-1"})

db.diseaseSummaries.insertOne({_id: "Summary-james-1", diseases: ["colon cancer", "t2 diabetes"]})

// two-step lookup to retrieve disease information for a patient


var dsid = db.patients.findOne().diseaseSummary

dsid

db.diseaseSummaries.findOne({_id: dsid})

// Embedded lookup method

db.patients.deleteMany({})

db.patients.insertOne({name: "James", age: 43, diseaseSummary: {diseases: ["colon cancer", "t2 diabetes"]}})

db.patients.findOne()

// One to One References

use cardData

db.persons.insertOne({name: "James", car: {model: "BMW"}, price: 40000})

db.persons.deleteMany({})

db.persons.insertOne({name: "James", age: 43, salary: 3000})

db.cars.insertOne({model: "BMW", price: 40000, owner: ObjectId('68f036a92b1fb18d64cebea5')}) - ObjectId is of persons previously inserted

// One to Many (embedded)


use support

db.questionThreads.insertOne({creator: "James", question: "How does that all work?", answers: ["q1a1", "q1a2"]})

db.answers.insertMany([{_id: "q1a1", text: "It works like that."}, {_id: "q1a2", text: "Thanks!"}])

db.answers.find()

db.questionThreads.deleteMany({})

// embedding example

db.questionThreads.insertOne({creator: "James", question: "How does that all work?", answers: [{text: "Like that"}, {text: "Thanks!"}]})

db.questionThreads.findOne()

// One to Many References


