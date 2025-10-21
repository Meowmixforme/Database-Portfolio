// Finding available options (add mongod.exe to PATH in Evnironment Variables in Windows)

mongod --help 

// dbpath

mongod --dbpath C:\Users\Kibbl\OneDrive\Documents\GitHub\Database-Portfolio\MongoDB\03_Exploring_The_Shell_and_Server\db

// logpath too

mongod --dbpath C:\Users\Kibbl\OneDrive\Documents\GitHub\Database-Portfolio\MongoDB\03_Exploring_The_Shell_and_Server\db --logpath C:\Users\Kibbl\OneDrive\Documents\GitHub\Database-Portfolio\MongoDB\03_Exploring_The_Shell_and_Server\logs\log.log

// Exploring Options (see mongod.cfg)

// Config file (to automate)

mongod -f C:\Users\Kibbl\OneDrive\Documents\GitHub\Database-Portfolio\MongoDB\03_Exploring_The_Shell_and_Server\mongod.cfg

// Shell options and help

mongosh --help

use test

// at database level

db.help()

// at collection level

db.test.help()