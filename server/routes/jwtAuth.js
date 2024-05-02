const router = require("express").Router();
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validinfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

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

router.post("/register", validinfo, async (req, res) => {
    try {
        // 1. destructure the req.body - email, password
        const { email, password } = req.body;

        // 2. check if user exist (if user exists then throw error)
        const user = await new Promise((resolve, reject) => {
            db.get(
                "SELECT * FROM users WHERE login = ?",
                [email],
                (err, row) => {
                    if (err) reject(err);
                    else resolve(row);
                }
            );
        });

        if (user) {
            return res.status(401).send("User already exists");
        }

        // 3. bcrypt the user password
        const saltRound = 10;
        const genSalt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, genSalt);

        // 4. enter the user inside our database
        await new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO users (login, password) VALUES (?, ?)",
                [email, bcryptPassword],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });

        // 5. generate jwt token
        const token = jwtGenerator(email);
        res.json({ token });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

router.post("/login", validinfo, async (req, res) => {
    try {
        // 1. destructure the req.body
        const { email, password } = req.body;

        // 2. check if user doesn't exist (if not then we throw err)
        const user = await new Promise((resolve, reject) => {
            db.get(
                "SELECT * FROM users WHERE login = ?",
                [email],
                (err, row) => {
                    if (err) reject(err);
                    else resolve(row);
                }
            );
        });

        if (!user) {
            return res.status(401).json("email or password are incorrect");
        }

        // 3. check if incoming password is the same the database password
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json("Password or email are incorrect");
        }

        // 4. give user the jwt token
        const token = jwtGenerator(user.login);
        res.json({ token });
    } catch (err) {
        console.log(err);
    }
});

router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
