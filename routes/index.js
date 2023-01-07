const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  res.render("celebrities");
});

router.get("/movies", (req, res, next) => {
  res.render("movies");
});

module.exports = router;
