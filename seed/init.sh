#!/bin/sh
mongoimport --collection books --file docker-entrypoint-initdb.d/books.json --jsonArray --uri "mongodb://SUPERUSERNAME:SUPERUSERPASSWORD@localhost:27017/goodreads-db?authSource=goodreads-db"
mongoimport --collection ratings --file docker-entrypoint-initdb.d/ratings.json --jsonArray --uri "mongodb://SUPERUSERNAME:SUPERUSERPASSWORD@localhost:27017/goodreads-db?authSource=goodreads-db"
mongoimport --collection images --file docker-entrypoint-initdb.d/images.json --jsonArray --uri "mongodb://SUPERUSERNAME:SUPERUSERPASSWORD@localhost:27017/goodreads-db?authSource=goodreads-db"
mongoimport --collection users --file docker-entrypoint-initdb.d/users.json --jsonArray --uri "mongodb://SUPERUSERNAME:SUPERUSERPASSWORD@localhost:27017/goodreads-db?authSource=goodreads-db"
