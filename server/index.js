const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// process.env.PORT
// process.env.jwtSecret
// process.env.NODE_ENV
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
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/clients", require("./routes/clients"));
app.use("/projects", require("./routes/projects"));
app.use("/rates", require("./routes/rates"));
app.use("/products", require("./routes/products"));
app.use("/instructions", require("./routes/instructions"));

app.listen(PORT, () => {
    console.log(`Server dancing on ${PORT}`);
});
