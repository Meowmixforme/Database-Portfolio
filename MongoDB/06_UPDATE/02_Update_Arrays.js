// Update Arrays

use users

db.users.find({$and: [{"hobbies.title": "Sports"}, {"hobbies.frequency": {$gte: 3}}]}).pretty() - matches Sports and Frequency 3 of any hobby

db.users.find({hobbies: {$elemMatch: {title: "Sports", frequency: {$gte: 3}}}}).pretty() - matches all users with Sports as a hobby and a frequency of 3 for that specific hobby

db.users.updateMany({hobbies: {$elemMatch: {title: "Sports", frequency: {$gte: 3}}}}, {$set: {"hobbies.$.highFrequency": true}}) - update all documents where the person has a hobby of sports and frequency > 3 and then create a new field of highFrequency

// Update all Array elements

