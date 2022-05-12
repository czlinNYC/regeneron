/* eslint-disable no-undef */
require("dotenv").config();
const knex = require("./connections/db").pg;
console.log("test");
const express = require("express");
const path = require("path");
(async () => {
  const raw = await knex.raw(`SELECT *
  FROM pg_settings
  WHERE name = 'port';`);
  console.log(raw.rows);
})();
const PORT = process.env.PORT || 3999;
const app = express();

app.use(express.static(__dirname + "/public"));
app.listen(PORT);
console.log(process.env.DATABASE_URL, "DATABASE URL");
app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/index.html"));
});
