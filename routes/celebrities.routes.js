// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      console.log(celebrities);
      res.render("celebrities/celebrities", { celebrities });
    })
    .catch((err) => console.log("error getting celebrities", err));
});

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res) => {
 console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
  });
  res.redirect("/celebrities");
}); 

router.post('/celebrities/:id/delete',(req,res)=>{
  console.log(req.params.id)
  Book.findByIdAndDelete(req.params.id)
  .then(()=>{
      res.redirect('/celebrities')
  })
})

module.exports = router;

