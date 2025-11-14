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

