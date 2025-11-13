// Update 

// import data

mongoimport --file users.json --db users --collection users --jsonArray

// updateOne()

db.users.updateOne({ _id: ObjectId('69140ce922105c1dd28ad1ae')}, {$set: {hobbies: [{ title: "Sports", frequency: 5},{ title: "Cooking", frequency: 3 },{title: "Hiking", frequency: 1}]}}) - update Chris' hobbies to include frequencies

db.users.find({"hobbies.title": "Sports"}).pretty()

db.users.updateMany({"hobbies.title": "Sports"}, {$set: {isSporty: true}}) - adds new field for all with Sports as hobbies to have new field isSporty

// Update with $set

db.users.updateOne({ _id: ObjectId('69140ce922105c1dd28ad1ae')}, {$set: {age: 40, phone:123456789}}) - update Chris' age and phone number

db.users.find().pretty()

// Increment and decrement values

db.users.updateOne({name: "Manuel"}, {$inc: {age: 2}}) - Increment Manuel's age by 2 years (can also use -1 to decrement)

db.users.updateOne({name: "Manuel"}, {$inc: {age: 1}, $set: {isSporty: false}}) - Increment Manuel's age by 1 year and add the isSporty flag as false

db.users.updateOne({name: "Manuel"}, {$inc: {age: 2}, $set: {age: 30}}) - Increment Manuel's age by 1 year and set it to 30 - will fail as two operators working on the same field will cause a conflict

// $min, $max and $mul

db.users.updateOne({name: "Chris"}, {$min: {age: 35}}) - update Chris' age to 35

db.users.updateOne({name: "Chris"}, {$min: {age: 38}}) - Will fail to modify (though not throw an error) as $min only changes if new value < than existing value

db.users.updateOne({name: "Chris"}, {$max: {age: 32}}) -  Will fail to modify (though not throw an error) as $max only changes if new value > than existing value

db.users.updateOne({name: "Chris"}, {$max: {age: 38}}) - update Chris' age to 38

db.users.updateOne({name: "Chris"}, {$mul: {age: 1.1}}) - will multiply age by a number specified (10%) 3.8 years older

// Removing fields $unset

db.users.updateMany({isSporty: true}, {$set: {phone: null}}) - set phone value on all people with the field isSporty: true to null

db.users.updateMany({isSporty: true}, {$unset: {phone: ""}}) - removes phone value on all people with the field isSporty: true

// Renaming fields $rename

db.users.updateMany({}, {$rename: {age: "totalAge"}}) - renames age to totalAge