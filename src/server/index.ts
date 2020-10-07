import express from "express";
import bodyParser from "body-parser";
import path from "path";
const fs = require('fs');


const buildDir = path.join(process.cwd() + "/build");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(buildDir));
console.log(__dirname)

app.get("/forms", function (req, res) {
  const query = req.query
  const formName = query.form || 'form1'
  const form = require(`${'./forms/' + formName + '.json'}`);
   return res.json(form);
  });

app.get("/*", function (req, res) {
  res.sendFile(path.join(buildDir, "index.html"));
});

const port = 3001;
console.log("checking port", port);
app.listen(port, () => {
  console.log(`Server now listening on port: ${port}`);
});