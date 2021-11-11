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

//create a route that posts the new note

router.post("/notes", (req, res) => {
  db.writeNotes(req.body)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => res.json(err));
});

//create route to delete the note. hint make sure you use req.params...
// router.delete(:title, :text, (req,res) => {
//   db.deleteNotes(req.params)
// })
module.exports = router;
