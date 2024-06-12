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
            console.log("Connected to the SQLite database. Projects.");
        }
    }
);

router.get("/", authorization, async (req, res) => {
    try {
        const projects = await new Promise((resolve, reject) => {
            db.all("SELECT * FROM projects", (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });

        if (projects.length > 0) {
            res.status(200).json({ projects });
        } else {
            res.status(403).json({ message: "No projects found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/create", authorization, async (req, res) => {
    try {
        const {
            projectCount,
            projectName,
            projectClient,
            projectStatus,
            projectComment,
        } = req.body;

        const clientName = await new Promise((resolve, reject) => {
            db.get(
                "SELECT clientName FROM clients WHERE id = ?",
                [projectClient],
                (err, row) => {
                    if (err) reject(err);
                    else {
                        if (row && row.clientName) {
                            resolve(row.clientName);
                        } else {
                            resolve(null);
                        }
                    }
                }
            );
        });

        await new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO projects (projectCount, projectName, projectClient, projectStatus, projectComment, clientName) VALUES (?, ?, ?, ?, ?, ?)",
                [
                    projectCount,
                    projectName,
                    projectClient,
                    projectStatus,
                    projectComment,
                    clientName,
                ],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });

        res.status(200).json({ message: "Project created" });
    } catch (err) {
        console.log(err.message);
        res.status(403).json({ message: "Server Error" });
    }
});

router.get("/:id", authorization, async (req, res) => {
    try {
        const id = req.params.id;

        const project = await new Promise((resolve, reject) => {
            db.get("SELECT * FROM projects WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        const instructions = await new Promise((resolve, reject) => {
            db.all(
                "SELECT * FROM instructions WHERE instructionProject = ?",
                [id],
                (err, row) => {
                    if (err) reject(err);
                    else resolve(row);
                }
            );
        });

        if (project) {
            res.status(200).json({ project, instructions });
        } else {
            res.status(403).json({ message: "Project not found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/edit", authorization, async (req, res) => {
    try {
        const {
            projectCount,
            projectName,
            projectClient,
            projectStatus,
            projectComment,
        } = req.body;

        await new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO clients (projectCount, projectName, projectClient, projectStatus, projectComment) VALUES (?, ?, ?, ?, ?)",
                [
                    projectCount,
                    projectName,
                    projectClient,
                    projectStatus,
                    projectComment,
                ],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });

        res.status(200).json({ message: "Project edited" });
    } catch (err) {
        console.log(err.message);
        res.status(403).json({ message: "Server Error" });
    }
});

module.exports = router;
