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

db.flightData.findOne({distance: {$gt: 9000}}) - first flight that matches criteria (don't use .pretty() as it exists only on the Cursor)

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

// Add passengers

db.passengers.insertMany([
  {
    "name": "Max Schwarzmueller",
    "age": 29
  },
  {
    "name": "Manu Lorenz",
    "age": 30
  },
  {
    "name": "Chris Hayton",
    "age": 35
  },
  {
    "name": "Sandeep Kumar",
    "age": 28
  },
  {
    "name": "Maria Jones",
    "age": 30
  },
  {
    "name": "Alexandra Maier",
    "age": 27
  },
  {
    "name": "Dr. Phil Evans",
    "age": 47
  },
  {
    "name": "Sandra Brugge",
    "age": 33
  },
  {
    "name": "Elisabeth Mayr",
    "age": 29
  },
  {
    "name": "Frank Cube",
    "age": 41
  },
  {
    "name": "Karandeep Alun",
    "age": 48
  },
  {
    "name": "Michaela Drayer",
    "age": 39
  },
  {
    "name": "Bernd Hoftstadt",
    "age": 22
  },
  {
    "name": "Scott Tolib",
    "age": 44
  },
  {
    "name": "Freddy Melver",
    "age": 41
  },
  {
    "name": "Alexis Bohed",
    "age": 35
  },
  {
    "name": "Melanie Palace",
    "age": 27
  },
  {
    "name": "Armin Glutch",
    "age": 35
  },
  {
    "name": "Klaus Arber",
    "age": 53
  },
  {
    "name": "Albert Twostone",
    "age": 68
  },
  {
    "name": "Gordon Black",
    "age": 38
  }
])

// To bypass Cursor Object and see full array of documents (gets data in advance)

db.passengers.find().toArray()

// forEach function to get all documents (better for large collection)

db.passengers.find().forEach((passengerData) => {printjson(passengerData)})

// Projection - only include certain fields (name, id is special field and always included) 

db.passengers.find({},{name: 1}).pretty()

// Projection - exlude certain fields (id)

db.passengers.find({},{name: 1, _id: 0}).pretty()

// Embedded documents (nested)

db.flightData.updateMany({}, {$set: {status: {description: "on-time", lastUpdated: "1 hour ago", details: {responsible: "David Lacey"}}}})

// Arrays of data []

db.passengers.updateOne({name: "Albert Twostone"}, {$set: {hobbies: ["sports", "cooking"]}})

// 
