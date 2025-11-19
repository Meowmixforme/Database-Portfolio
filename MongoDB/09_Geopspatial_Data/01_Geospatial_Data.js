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