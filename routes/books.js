const express = require("express");
const {
  booksHandler,
  bookHandler,
  addBookGetHandler,
  addBookPostHandler,
} = require("../controllers/bookscontroller");
const router = express.Router();
router.get("/", booksHandler);

router.get("/book/:bookId", bookHandler);

router.get("/add", addBookGetHandler);
router.post("/add", addBookPostHandler);

module.exports = router;
