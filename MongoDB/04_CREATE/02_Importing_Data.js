// Importing data (need mongodb tools and location added to PATH in system environment variables)

cd C:\Users\Kibbl\OneDrive\Documents\GitHub\Database-Portfolio\MongoDB\04_CREATE - in CMD navigate to folder with tv-shows.json

mongoimport tv-shows.json -d movieData -c movies --jsonArray --drop

mongosh

show dbs

use movieData

db.movies.find().pretty()


