const router = require("express").Router();
const sqlite3 = require("sqlite3").verbose();
const authorization = require("../middleware/authorization");
require("dotenv").config();

const db = new sqlite3.Database(
    "./database/mcu.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Connected to the SQLite database.");
        }
    }
);

router.get("/", authorization, async (req, res) => {
    try {
        const clients = await new Promise((resolve, reject) => {
            db.all("SELECT * FROM clients", (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });

        if (clients.length > 0) {
            res.status(200).json({ clients });
        } else {
            res.status(404).json({ message: "No clients found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/create", authorization, async (req, res) => {
    try {
        const { clientName, clientAddress, isClient, isContractor } = req.body;

        await new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO clients (clientName, clientAddress, isClient, isContractor) VALUES (?, ?, ?, ?)",
                [clientName, clientAddress, isClient, isContractor],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });

        res.status(200).json({ message: "Client created" });
    } catch (err) {
        console.log(err.message);
        res.status(403).json({ message: "Server Error" });
    }
});

module.exports = router;
