const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hellp from the DashboardZero backend!" });
});

function start(port = port) {
  app.listen(port, () => {
    console.log(`DashboardZero backend listening on port ${port}`);
  });
}

module.exports = {
  start
};
