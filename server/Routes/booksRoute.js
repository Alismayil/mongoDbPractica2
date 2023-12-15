const express = require("express");
const {
  getBooks,
  getById,
  deleteBooks,
  postBooks,
  updateBooks,
} = require("../Controller/booksController.js");

const router = express.Router();

router.get("/books/", getBooks);

// ------------------------------GetById

router.get("/books/:id", getById);

// ------------------------------Delete

router.delete("/books/:id", deleteBooks);

// ------------------------------Post

router.post("/books/", postBooks);

// ------------------------------Update

router.put("/books/:id", updateBooks);
module.exports = router;