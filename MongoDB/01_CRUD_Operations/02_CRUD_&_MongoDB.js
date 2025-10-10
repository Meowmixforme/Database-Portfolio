// Insert many into a new database (see flights.json file)

db.flightData.insertMany([
   {
     "departureAirport": "MUC",
     "arrivalAirport": "SFO",
     "aircraft": "Airbus A380",
     "distance": 12000,
     "intercontinental": true
   },
   {
     "departureAirport": "LHR",
     "arrivalAirport": "TXL",
     "aircraft": "Airbus A320",
     "distance": 950,
     "intercontinental": false
   }
 ]
 )

// Finding (filtering) specific records

db.flightData.find({intercontinental: true}).pretty()

db.flightData.find({distance: {$gt: 10000}}).pretty() - gt = greater than

db.flightData.find({distance: {$gt: 9000}}).pretty()

// Find one

db.flightData.findOne({distance: {$gt: 9000}}) - first flight that matches criteria ( don't use .pretty() )

// Update and Update All

// Update once record by id and add field delayed = true

db.flightData.updateOne({_id: ObjectId('68e8e63ace54075a74cebea4')}, {$set: {delayed: true}})

// Update matching id to delayed = false

db.flightData.update({_id: ObjectId('68e8e63ace54075a74cebea4')}, {$set: {delayed: false}}) 

// Update many using just update

db.flightData.updateMany({_id: ObjectId('68e8e63ace54075a74cebea4')}, {{delayed: false}}) - this will strip all data but that specified

// Update using replaceOne - is explicit way of replacing data

db.flightData.replaceOne({_id: ObjectId('68e8e63ace54075a74cebea4')},{
     "departureAirport": "MUC",
     "arrivalAirport": "SFO",
     "aircraft": "Airbus A380",
     "distance": 12000,
     "intercontinental": true
   }) 

// Find
