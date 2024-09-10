const express = require("express")
const path = require("node:path");

const app = express();
//const newRouter = require("routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get("/", (req, res) => {
  res.render("index", {messageArray: messages});
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log('test');
})