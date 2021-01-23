#!/bin/sh
mongoimport --collection books --file docker-entrypoint-initdb.d/data.huge.json --uri "mongodb://SUPERUSERNAME:SUPERUSERPASSWORD@localhost:27017/goodreads-db?authSource=goodreads-db"
mongoimport --collection users --file docker-entrypoint-initdb.d/users.json --uri "mongodb://SUPERUSERNAME:SUPERUSERPASSWORD@localhost:27017/goodreads-db?authSource=goodreads-db"
