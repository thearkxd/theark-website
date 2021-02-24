const { Client } = require("discord.js");
const _client = new Client({ fetchAllMembers: true });
const client = (global.client = _client);
const express = require("express");
const ejs = require("ejs");
const app = express();
app.listen(3000 || process.env.PORT);

client.login()
  .then(() => console.log("Giriş başarılı!"))
  .catch(() => console.log("Giriş Başarısız!"));

app.engine(".ejs", ejs.__express);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(`${__dirname}/views/`));

app.get("/", (req, res) => {
  const theark = client.users.cache.get("350976460313329665");
  res.render("theark", { client, theark });
});
