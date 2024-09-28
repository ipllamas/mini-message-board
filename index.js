const express = require("express")
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

app.use("/", indexRouter)
app.use("/new", formRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server running...');
})