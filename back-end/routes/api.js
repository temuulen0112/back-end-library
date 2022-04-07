const express = require("express");
const router = express.Router();
const LibraryController = require('../controller/LibraryController');

// Requests
router.get('/books', LibraryController.get_books);
router.post('/addBook', LibraryController.add_book);
router.put('/updateBook/:id', LibraryController.update_book);
router.delete('/deleteBook/:id', LibraryController.delete_books);

module.exports = router;