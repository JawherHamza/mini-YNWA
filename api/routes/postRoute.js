var express = require("express");
let router = express.Router();
var { add, getAll } = require("../controllers/post");

router
  .post("/", (req, res) => {
    add(req.body)
      .then((doc) => res.status(201).json(doc))
      .catch((err) => res.json(err));
  })
  .get("/:section", (req, res) => {
    getAll(req.params.section)
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(400).json(err));
  });

module.exports = router;
