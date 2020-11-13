const { Router } = require("express");
const router = Router();
const movies = require("../Movies.json");

router.get("/api/movies", (req, res) => {
  res.json(movies);
});

router.get('/users/:id'),(req,res)=>{
  res.json({
    id:req.params.id,
    name:'leo',
    age:100
  })
}

router.get("/api/movies/movie/:name", function (req, res) {
  let datate = [];
  for (let i = 0; i < movies.results.length; i++) {
    if (movies.results[i].id === parseInt(req.params.name)) {
      datate.push(movies.results[i]);
    }
  }
res.json(datate)
});
router.get("/api/movies/:name", function (req, res) {
  let datatem = [];
  for (let i = 0; i < movies.results.length; i++) {
    if (movies.results[i].original_title === req.params.name) {
      datatem.push(movies.results[i]);
    }
  }
res.json(datatem)
});


module.exports = router;
