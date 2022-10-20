const path = require("path");
const express = require("express");
const app = express();
const port = 5000;
const parentDirectory = path.join(__dirname, "../public");

app.use(express.static(parentDirectory));

app.listen(port, () => {
    console.log(`Server runnning at port ${port}`);
});
