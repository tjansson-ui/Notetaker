const router = require("express").Router();
const path = require("path");

// router to index page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..","public","index.html"))
})

// router to notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "notes.html"))
})

module.exports = router;