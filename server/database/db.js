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
    clientName TEXT NOT NULL,
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
  isContractor BOOLEAN NOT NULL
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

// Создание таблицы rates
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS rates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            rateValue FLOAT NOT NULL,
            rateStandart INTEGER NOT NULL,
            rateComment TEXT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creatins users table: ", err);
                return;
            }
            console.log("Users table created successfully");
        }
    );
});

// Создание таблицы products (АРТИКУЛЫ)
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productCount TEXT NOT NULL,
            productName TEXT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creatins users table: ", err);
                return;
            }
            console.log("Users table created successfully");
        }
    );
});

// Создание таблицы components
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS components (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            componentName TEXT NOT NULL,
            componentValue INTEGER NOT NULL,
            componentInstruction INTEGER NOT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creatins users table: ", err);
                return;
            }
            console.log("Users table created successfully");
        }
    );
});

// Создание таблицы instructions
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS instructions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            instructionDate TEXT NOT NULL,
            instructionCount TEXT NOT NULL,
            instructionProductsValue INTEGER NOT NULL,
            instructionProject INTEGER NOT NULL,
            instructionProduct INTEGER NOT NULL,
            instructionBet FLOAT NOT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creatins users table: ", err);
                return;
            }
            console.log("Users table created successfully");
        }
    );
});

db.close();
