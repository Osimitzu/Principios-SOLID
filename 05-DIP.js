/*** Dependency Inversion Principle ***/

// class MySQLConnection {
//   connect() {
//     // código para conectar a la base de datos MySQL
//   }
// }

// class PasswordReminder {
//   constructor() {
//     this.dbConnection = new MySQLConnection();
//   }
// }

// Lo mismo de arriba, pero REFACTORIZADO con Dependency Inversion Principle:
class MySQLConnection {
  connect() {
    // código para conectar a la base de datos MySQL
  }
}

class PostgreSQLConnection {
  connect() {
    // código para conectar a la base de datos PostgreSQL
  }
}

class PasswordReminder {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
}
