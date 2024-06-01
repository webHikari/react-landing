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
        const products = await new Promise((resolve, reject) => {
            db.all("SELECT * FROM products", (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });

        if (products.length > 0) {
            res.status(200).json({ products });
        } else {
            res.status(403).json({ message: "No products found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/:id", authorization, async (req, res) => {
    try {
        const id = req.params.id;

        const product = await new Promise((resolve, reject) => {
            db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        if (product) {
            res.status(200).json({ product });
        } else {
            res.status(403).json({ message: "Product not found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/create", authorization, async (req, res) => {
    try {
        const { productCount, productName } = req.body;

        await new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO products (productCount, productName) VALUES (?, ?)",
                [productCount, productName],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });

        res.status(200).json({ message: "Product created" });
    } catch (err) {
        console.log(err.message);
        res.status(403).json({ message: "Server Error" });
    }
});

router.post("/edit", authorization, async (req, res) => {
    try {
        const { productId, productCount, productName } =
            req.body;

        await new Promise((resolve, reject) => {
            const query = `
                UPDATE products
                SET productCount = ?, productName = ?
                WHERE id = ?
            `;
            const values = [
                productCount,
                productName,
                productId,
            ];

            db.run(query, values, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        res.status(200).json({ message: "Product updated successfully" });
    } catch (err) {
        console.log(err.message);
        res.status(403).json({ message: "Server Error" });
    }
});

module.exports = router;
