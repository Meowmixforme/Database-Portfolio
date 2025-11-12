// Update 

// import data

mongoimport --file users.json --db users --collection users --jsonArray

// updateOne()

db.users.updateOne({ _id: ObjectId('69140ce922105c1dd28ad1ae')}, {$set: {hobbies: [{ title: "Sports", frequency: 5},{ title: "Cooking", frequency: 3 },{title: "Hiking", frequency: 1}]}}) - update Chris' hobbies to include frequencies

db.users.find({"hobbies.title": "Sports"}).pretty()

db.users.updateMany({"hobbies.title": "Sports"}, {$set: {isSporty: true}}) - adds new field for all with Sports as hobbies to have new field isSporty

// Update with $set
