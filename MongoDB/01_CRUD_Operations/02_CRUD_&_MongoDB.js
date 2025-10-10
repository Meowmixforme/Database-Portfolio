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

// find one

db.flightData.findOne({distance: {$gt: 9000}}) - first flight that matches criteria ( don't use .pretty() )

  