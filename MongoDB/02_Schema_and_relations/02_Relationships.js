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

