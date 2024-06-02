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
        const instructions = await new Promise((resolve, reject) => {
            db.all(`
                SELECT
                    i.id,
                    i.instructionDate,
                    i.instructionCount,
                    i.instructionProductsValue,
                    p.projectCount AS instructionProject,
                    pr.productCount AS instructionProduct,
                    r.rateValue AS instructionBet
                FROM instructions i
                JOIN projects p ON i.instructionProject = p.id
                JOIN products pr ON i.instructionProduct = pr.id
                JOIN rates r ON i.instructionBet = r.id
            `, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });

        if (instructions.length > 0) {
            res.status(200).json({ instructions });
        } else {
            res.status(403).json({ message: "No instructions found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});


router.get("/:id", authorization, async (req, res) => {
    try {
        const id = req.params.id;

        const instruction = await new Promise((resolve, reject) => {
            db.get("SELECT * FROM instructions WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        const components = await new Promise((resolve, reject) => {
            db.all("SELECT * FROM components WHERE componentInstruction = (?)", [id], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });


        if (instruction) {
            res.status(200).json({ instruction, components });
        } else {
            res.status(403).json({ message: "Instruction not found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/create", authorization, async (req, res) => {
    try {
        const { instructionDate, instructionCount, instructionProductsValue, instructionProject, instructionProduct, instructionBet, components } = req.body;

        let instructionId;
        await new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO instructions (instructionDate, instructionCount, instructionProductsValue, instructionProject, instructionProduct, instructionBet) VALUES (?, ?, ?, ?, ?, ?)",
                [instructionDate, instructionCount, instructionProductsValue, instructionProject, instructionProduct, instructionBet],
                function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        instructionId = this.lastID;
                        resolve();
                    }
                }
            );
        });

        components.forEach(async (component) => {
            await new Promise((resolve, reject) => {
                db.run(
                    "INSERT INTO components (componentName, componentValue, componentInstruction) VALUES (?, ?, ?)",
                    [component.componentName, component.componentValue, instructionId],
                    (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    }
                );
            });
        });

        res.status(200).json({ message: "Instruction created" });
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
