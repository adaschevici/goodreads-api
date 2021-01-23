db.createUser({
  user: "SUPERUSERNAME",
  pwd: "SUPERUSERPASSWORD",
  roles: [
    {
      role: "readWrite",
      db: "goodreads-db"
    }
  ]
})
