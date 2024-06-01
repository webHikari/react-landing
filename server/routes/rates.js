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
        const rates = await new Promise((resolve, reject) => {
            db.all("SELECT * FROM rates", (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });

        if (rates.length > 0) {
            res.status(200).json({ rates });
        } else {
            res.status(403).json({ message: "No rates found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/:id", authorization, async (req, res) => {
    try {
        const id = req.params.id;

        const rate = await new Promise((resolve, reject) => {
            db.get("SELECT * FROM rates WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        if (rate) {
            res.status(200).json({ rate });
        } else {
            res.status(403).json({ message: "Rate not found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/create", authorization, async (req, res) => {
    try {
        const { rateValue, rateStandart, rateComment } = req.body;

        await new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO rates (rateValue, rateStandart, rateComment) VALUES (?, ?, ?)",
                [rateValue, rateStandart, rateComment],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });

        res.status(200).json({ message: "Rate created" });
    } catch (err) {
        console.log(err.message);
        res.status(403).json({ message: "Server Error" });
    }
});

module.exports = router;
