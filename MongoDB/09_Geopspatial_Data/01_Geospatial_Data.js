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

