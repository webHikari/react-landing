const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// process.env.PORT
// process.env.jwtSecret
// process.env.NODE_ENV,
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/dist")));
    console.log(path.join(__dirname, "client/dist"));
} else {
    console.log("Develop-mode");
}

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/auth", require("./routes/jwtAuth"))
    .use("/dashboard", require("./routes/dashboard"))
    .use("/clients", require("./routes/clients"))
    .use("/projects", require("./routes/projects"))
    .use("/rates", require("./routes/rates"))
    .use("/products", require("./routes/products"))
    .use("/instructions", require("./routes/instructions"))
    .use("/minions", require("./routes/minions"))
    .use("/shifts", require("./routes/shifts"));

app.listen(PORT, () => {
    console.log(`Server dancing on ${PORT}`);
});
