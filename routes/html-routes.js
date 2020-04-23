var path = require("path");

module.exports = function(app) {
//all routes
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};