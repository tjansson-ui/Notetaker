const router = require("express").Router();
const path = require("path");
const fs = require("fs/promises")
const db = path.join(__dirname, "..", "db", "db.json")
// const id

// GET route
router.get("/api/notes", async (req, res) => {
  try {
    const notes = JSON.parse(await fs.readFile(db))
    res.json(notes)
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
});

// POST route
router.post("/api/notes", async (req, res) => {
  try {
    const notes = JSON.parse(await fs.readFile(db, "utf-8"))
    notes.push({
      title: req.body.title,
      text: req.body.text,
    //   id: ***
    })
    await fs.writeFile(db, JSON.stringify(notes))
    res.json(notes)
  } catch(err) {
    res.status(500).send(err)
    console.error(err)
  }
})


module.exports = router;