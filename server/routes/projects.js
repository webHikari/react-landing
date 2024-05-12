const router = require("express").Router();
const sqlite3 = require("sqlite3").verbose();
const authorization = require("../middleware/authorization");
const jwt = require("jsonwebtoken");
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
        // Получаем токен из заголовка Authorization
        const token = req.headers.token;
        console.log(token);
        // Расшифровываем токен и получаем идентификатор пользователя
        const decodedToken = jwt.verify(token, process.env.jwtSecret);
        console.log(decodedToken);
        const userId = decodedToken.user;
        console.log(userId);
        const user = await new Promise((resolve, reject) => {
            db.get(
                "SELECT id, login FROM users WHERE id = ?",
                [userId],
                (err, row) => {
                    if (err) reject(err);
                    else resolve(row);
                }
            );
        });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(403).json({ message: "Server Error" });
    }
});

module.exports = router;
