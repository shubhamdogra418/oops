//Only ONE instance of a class exists
//Ensure a class has only one instance and provides a global point of access to it.
//Singletons are frequently used for Database Connection Pools or Configuration Managers. You don’t want to open 100 separate connections to MongoDB if one pool can handle them all.

class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    //make a new one
    this.connectionString = "mongodb://localhost:27017/mydb";
    DatabaseConnection.instance = this;
  }

  getConnection() {
    return this.connectionString;
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2);

//module.exports caching system creates a singleton-like behavior by default.
//If you export a pre-instantiated object (module.exports = new Database()), Node caches that instance across your entire app.
//Used when shared resource should not be duplicated (DB connections)
