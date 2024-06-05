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
            console.log("Connected to the SQLite database. Minions.");
        }
    }
);

router.get("/", authorization, async (req, res) => {
    try {
        const minions = await new Promise((resolve, reject) => {
            db.all("SELECT * FROM minions", (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });

        if (clients.length > 0) {
            res.status(200).json({ minions });
        } else {
            res.status(403).json({ message: "No minions found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/:id", authorization, async (req, res) => {
    try {
        const id = req.params.id;

        const client = await new Promise((resolve, reject) => {
            db.get("SELECT * FROM minions WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        if (client) {
            res.status(200).json({ client });
        } else {
            res.status(403).json({ message: "Minion not found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/create", authorization, async (req, res) => {
    try {
        const {
            minionName,
            minionSurname,
            minionPatronymic,
            minionPhone,
            minionWorkStatus,
            minionAgent,
            minionRate,
            minionDayNightStatus,
            minionComment,
        } = req.body;

        await new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO minions (minionName, minionSurname, minionPatronymic, minionPhone, minionWorkStatus, minionAgent, minionRate, minionDayNightStatus, minionComment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    minionName,
                    minionSurname,
                    minionPatronymic,
                    minionPhone,
                    minionWorkStatus,
                    minionAgent,
                    minionRate,
                    minionDayNightStatus,
                    minionComment,
                ],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });

        res.status(200).json({ message: "Minion created" });
    } catch (err) {
        console.log(err.message);
        res.status(403).json({ message: "Server Error" });
    }
});

// router.post("/edit", authorization, async (req, res) => {
//     try {
//         const { clientId, clientName, clientAddress, isClient, isContractor } =
//             req.body;

//         await new Promise((resolve, reject) => {
//             const query = `
//                 UPDATE clients
//                 SET clientName = ?, clientAddress = ?, isClient = ?, isContractor = ?
//                 WHERE id = ?
//             `;
//             const values = [
//                 clientName,
//                 clientAddress,
//                 isClient,
//                 isContractor,
//                 clientId,
//             ];

//             db.run(query, values, (err) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve();
//                 }
//             });
//         });

//         res.status(200).json({ message: "Client updated successfully" });
//     } catch (err) {
//         console.log(err.message);
//         res.status(403).json({ message: "Server Error" });
//     }
// });

module.exports = router;
