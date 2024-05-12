const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./mcu.db");

// Создание таблицы users
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`,
        (err) => {
            if (err) {
                console.error("Error creating users table:", err);
                return;
            }
            console.log("Users table created successfully");
        }
    );
});

// Создание таблицы projects
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    projectCount TEXT NOT NULL,
    projectName TEXT NOT NULL,
    projectClient TEXT NOT NULL,
    projectStatus TEXT NOT NULL,
    projectComment TEXT NOT NULL
  )`,
        (err) => {
            if (err) {
                console.error("Error creating users table:", err);
                return;
            }
            console.log("Users table created successfully");
        }
    );
});

// Создание таблицы clients
db.serialize(() => {
  db.run(
      `CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  clientName TEXT NOT NULL,
  clientAddress TEXT NOT NULL,
  isClient BOOLEAN NOT NULL,
  isContractor BOOLEAN NOT NULL,
  isRecruitor BOOLEAN NOT NULL,
  isLogist BOOLEAN NOT NULL
)`,
      (err) => {
          if (err) {
              console.error("Error creating users table:", err);
              return;
          }
          console.log("Users table created successfully");
      }
  );
});



db.close();
