const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});