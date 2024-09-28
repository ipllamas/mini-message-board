const {Router} = require("express");
const newRouter = Router();

console.log("newRouter");
newRouter.get("/", (req, res) => {
  res.render("form")
})

module.exports = newRouter;