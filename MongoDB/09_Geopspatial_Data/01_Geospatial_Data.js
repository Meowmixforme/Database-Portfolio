// Geospatial data

// Adding GeoJSON data

use awesomeplaces

37.7689412,-122.4759107 - California Academy of Sciences

db.places.insertOne({name: "California Academy of Sciences", location: {type: "Point", coordinates: [-122.4759107, 37.7689412]}}) - long then lat

db.places.findOne()

// Running GeoJson queries

37.770282,-122.4724223 - Fake current location

db.places.createIndex({location: "2dsphere"}) - geospatial index (required for queries $near, $geoWithin and $geoIntersects)

db.places.find({location: {$near: {$geometry: {type: "Point", coordinates: [-122.4724223, 37.770282]}, $maxDistance: 500, $minDistance: 10}}}).pretty() - returns places near Fake current location within a defined radius

db.places.insertOne({name: "Conservatory of Flowers", location: {type: "Point", coordinates: [-122.4641855, 37.7702029]}})

db.places.insertOne({name: "Lisa & Douglas Goldman Tennis Center", location: {type: "Point", coordinates: [-122.461841, 37.7695612]}})

db.places.insertOne({name: "The Painted Ladies", location: {type: "Point", coordinates: [-122.4483471, 37.7622779]}}) - Outside Golden Gate Park

// Draw 4 corners around Golden Gate Park

const p1 = [-122.4547, 37.77473]

const p2 = [-122.45303, 37.76641]

const p3 = [-122.51026, 37.76411]

const p4 = [-122.51088, 37.77131]

db.places.find({location: {$geoWithin: {$geometry: {type: "Polygon", coordinates: [[p1, p2, p3, p4, p1]]}}}}).pretty() - find all places inside Golden Gate Park by drawing a polygon using the four corners (The Painted Ladies aren't found as they reside outside of the polygon)

db.areas.insertOne({name: "Golden Gate Park", area: {type: "Polygon", coordinates: [[p1, p2, p3, p4, p1]]}}) - store polygon in  the database

db.areas.createIndex({area: "2dsphere"})

db.areas.find({area: {$geoIntersects: {$geometry: {type: "Point", coordinates: [-122.49089, 37.76992]}}}}).pretty() - find out if a user is inside a specific area (intersects with a point)

// Finding locations within a certain radius

db.places.find({location: {$geoWithin: {$centerSphere: [[-122.46203, 37.77286], 1 / 6378.1]}}}).pretty() - search for points within the radius (miles to km conversion) two are found

db.places.find().pretty()

db.places.updateOne({_id: ObjectId('691c11936aeaf69390cebea4')}, {$set: {location: {type: "Point", coordinates: [-122.46636, 37.77014]}}}) - update location for 'California Academy of Sciences' to be the exact location

db.places.find({location: {$geoWithin: {$centerSphere: [[-122.46203, 37.77286], 1 / 6378.1]}}}).pretty() - now three are found

// Assignment

//Task 1

use newplaces

db.places.insertOne({name: "Beergarden", loc: {type: "Point", coordinates: [11.59228, 48.15203]}}) - add Beergarden

db.places.insertOne({name: "Oktoberfest", loc: {type: "Point", coordinates: [11.54965, 48.13203]}}) - add Oktoberfest

db.places.insertOne({name: "My old Place", loc: {type: "Point", coordinates: [11.56934, 48.15105]}}) - a random house in Munich

const myLocation = [11.59475, 48.14235]

db.places.createIndex({loc: "2dsphere"})

db.places.find({loc: {$near: {$geometry: {type: "Point", coordinates: myLocation}}}}).pretty() - find places near my location (ordered by proximity)

// Task 2

db.places.find({loc: {$near: {$geometry: {type: "Point", coordinates: myLocation}, $minDistance: 1000, $maxDistance: 2000}}}).pretty() - all points within min 1000 meters and max distance 2000 meters (Beergarden)

db.places.find({loc: {$near: {$geometry: {type: "Point", coordinates: myLocation}, $minDistance: 2000, $maxDistance: 3000}}}).pretty() - all points within min 2000 meters and max distance 3000 meters (My old Place)

// Task 3

const p1 = [11.6097, 48.14522]

const p2 = [11.57142, 48.15416]

const p3 = [11.6, 48.15954]

const polygonArea = [[p1, p2, p3, p1]]

const polygonObject = {type: "Polygon", coordinates: polygonArea}

db.places.find({loc: {$geoWithin: {$geometry: polygonObject}}}).pretty() - all locations within the polygon (Beergarden)

// Task 4

db.areas.insertOne({name: "Free Time Well-Being Area", area: polygonObject}) - store area

// Task 5

db.areas.find({area: {$geoIntersects: {$geometry: {type: "Point", coordinates: [11.59228, 48.15203]}}}}).pretty() - which areas in the collection contain the point