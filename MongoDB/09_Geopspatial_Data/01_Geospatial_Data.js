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


