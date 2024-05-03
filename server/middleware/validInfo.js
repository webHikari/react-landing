module.exports = async (req, res, next) => {
    const { email, password } = req.body;

    if (req.path === "/register") {
        if (![email, password].every(Boolean)) {
            return res.status(401).json("Missing credentials");
        }
    } else if (req.path === "/login") {
        if (![email, password].every(Boolean)) {
            return res.status(401).json("Missing credentials");
        }
    }

    next();
};
