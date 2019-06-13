const path = require("path");
const router = require("express").Router();
const apiRoutes = require("../routes/api/apiRoutes.js");


// API Routes
router.use("/api", apiRoutes);


router.use("/reactroute", function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
})

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;