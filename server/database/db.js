const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./mcu.db");

// Создание таблицы users
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`, (err) => {
    if (err) {
      console.error("Error creating users table:", err);
      return;
    }
    console.log("Users table created successfully");
  });
});

db.close();
