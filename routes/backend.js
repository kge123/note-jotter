const router = require("express").Router();
const db = require("../db");

//create a route that returns all the notes and renders them on the page

router.get("/notes", (req, res) => {
  db.readNotes()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
