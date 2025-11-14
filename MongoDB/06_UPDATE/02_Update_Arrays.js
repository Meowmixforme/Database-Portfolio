// Update Arrays

use users

db.users.find({$and: [{"hobbies.title": "Sports"}, {"hobbies.frequency": {$gte: 3}}]}).pretty() - matches Sports and Frequency 3 of any hobby

db.users.find({hobbies: {$elemMatch: {title: "Sports", frequency: {$gte: 3}}}}).pretty() - matches all users with Sports as a hobby and a frequency of 3 for that specific hobby

db.users.updateMany({hobbies: {$elemMatch: {title: "Sports", frequency: {$gte: 3}}}}, {$set: {"hobbies.$.highFrequency": true}}) - update all documents where the person has a hobby of sports and frequency > 3 and then create a new field of highFrequency

// Update all Array elements

db.users.find({"hobbies.frequency": {$gt: 2}}).pretty()

db.users.updateMany({"hobbies.frequency": {$gt: 2}}, {$set: {"hobbies.$.goodFrequency": true}}) - Only updates the first element for all if freqency > 2

db.users.find({totalAge: {$gt: 30}})

db.users.updateMany({totalAge: {$gt: 30}}, {$inc: {"hobbies.$[].frequency": -1}}) - update all elements in array to decrease frequency by 1 

// Find and update specific fields

db.users.find({"hobbies.frequency": {$gt: 2}})

db.users.updateMany({"hobbies.frequency": {$gt: 2}}, {$set: {"hobbies.$[el].goodFrequency": true}}, {arrayFilters: [{"el.frequency": {$gt: 2}}]})
- update all hobbies where frequency > 2 to show add goodFrequency = true

// Adding elements to an Array

db.users.updateOne({name: "Maria"}, {$push: {hobbies: {title: "Sports", frequency: 2}}}) - add Sports to Maria

db.users.updateOne({name: "Maria"}, {$push: {hobbies: {$each: [{title: "Good Wine", frequency: 7}, {title: "Hiking", frequency: 1}], $sort: {frequency: -1}}}}) - add multiple hobbies as an update to the hobbies Array, sorted descending order by frequency

// Removing elements from an Array

db.users.updateOne({name: "Maria"}, {$pull: {hobbies: {title: "Hiking"}}}) - Remove hikihng from Maria

db.users.updateOne({name: "Maria"}, {$pull: {hobbies: {title: "Good Wine"}}}) - do the same for Good Wine

db.users.updateOne({name: "Chris"}, {$pop: {hobbies: 1}}) - remove last element of the Array

db.users.updateOne({name: "Chris"}, {$pop: {hobbies: -1}}) - removes first element of an Array

// $addToSet

db.users.updateOne({name: "Maria"}, {$addToSet: {hobbies: {title: "Hiking", frequency: 2}}}) - add to set adds unique values only