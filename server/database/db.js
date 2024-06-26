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
            console.log("Projects table created successfully");
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
            console.log("Clients table created successfully");
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
            console.log("Rates table created successfully");
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
            console.log("Products table created successfully");
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
            console.log("Components table created successfully");
        }
    );
});

// db.serialize(() => {
//     db.run(`DROP TABLE instructions`, (err) => {
//         if (err) {
//             console.error("Error deleting instructions table: ", err);
//             return;
//         }
//         console.log("Instructions table deleted successfully");
//     });
// });

// Создание таблицы instructions
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS instructions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            instructionDate TEXT NOT NULL,
            instructionCount TEXT NOT NULL,
            instructionProductsValue INTEGER NOT NULL,
            instructionProject INTEGER NOT NULL,
            projectName TEXT NOT NULL,
            instructionProduct INTEGER NOT NULL,
            productName TEXT NOT NULL,
            instructionBet INTEGER NOT NULL,
            betValue FLOAT NOT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creatins instructions table: ", err);
                return;
            }
            console.log("Instructions table created successfully");
        }
    );
});

// Создание таблицы minions
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS minions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            minionName TEXT NOT NULL,
            minionSurname TEXT NOT NULL,
            minionPatronymic TEXT NULL,
            minionPhone TEXT NULL,
            minionDayNightStatus TEXT NOT NULL,
            minionWorkStatus TEXT NOT NULL,
            minionRate TEXT NOT NULL,
            minionAgent TEXT NULL,
            minionComment TEXT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creatins users table: ", err);
                return;
            }
            console.log("Minions table created successfully");
        }
    );
});

// Создание таблицы shifts
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS shifts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            shiftDate TEXT NOT NULL,
            shiftMaster TEXT NOT NULL,
            shiftInstruction INTEGER NOT NULL,
            shiftBasement TEXT NOT NULL,
            shiftDayNight BOOLEAN NOT NULL,
            shiftDoneStatus BOOLEAN NOT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creatins shifts table: ", err);
                return;
            }
            console.log("Shifts table created successfully");
        }
    );
});

// Создание таблицы shiftsTabel
db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS shiftsTabel (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            shiftMinion INTEGER NOT NULL,
            shiftId INTEGER NOT NULL,
            shiftTabelInstruction INTEGER NOT NULL,
            shiftTabelRate INTEGER NOT NULL,
            shiftTabelStart TEXT NOT NULL,
            shiftTabelEnd TEXT NOT NULL,
            shiftTabelDinner TEXT NOT NULL,
            shiftTabelValue INTEGER NOT NULL,
            shiftTabelPayment TEXT NOT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creatins shiftsTabel table: ", err);
                return;
            }
            console.log("ShiftsTabel table created successfully");
        }
    );
});

db.close();
