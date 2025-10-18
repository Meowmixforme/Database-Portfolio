// Creating blog exercise

use blog

db.users.insertMany([{name: "James Smith", age: 43, email: "james@test.com"}, {name: "David Lacey", age: 78, email: "jovialmonk@test.com"}])

db.posts.insertOne({title: "My first post", text: "This is my first post, I hope you like it!", tags: ["new", "tech"], creator: ObjectId('68f2ed8a1ce1cc64dfcebea5'), comments: [{text: "I like this post!", author: ObjectId('68f2ed8a1ce1cc64dfcebea4')}]}) - james smith as creator david lacey as first post

