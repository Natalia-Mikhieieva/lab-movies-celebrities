// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movies = require("../models/Movie.model");

// all your routes here
router.get("/movies/create", (req, res) => {
    res.render("movies/new-movie");
  });
  
  router.post("/movies/create", (req, res) => {
   console.log(req.body);
    const { title, genre, plot, cast } = req.body;
    Movies.create({
      title: title,
      genre: genre,
      plot: plot,
      cast:cast
    });
    res.redirect("/movies");
  }); 

  router.get("/movies", (req, res, next) => {
    Movies.find()
      .then((movies) => {
        console.log(movies);
        res.render("movies/movies", { movies });
      })
      .catch((err) => console.log("error getting movies", err));
  });


module.exports = router;