const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  const tags = ["blogging", "astro", "successes", "learning in public"];
  res.json(tags);
});

app.get("/tags");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
