const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
    name: {
        type: String,
        required: [true, "Book name must be filled!"],
    },
    price: {
        type: Int32,
    },
    author: {
        type: String,
        required: [true, "Book author must be filled!"]
    },
    isbn: {
        type: Int32,
        length: 10
    },
    publishdate: {
        type: Date,
        required: [true, "Published Date must be filled!"]
    },
})

const Library = mongoose.model("library", LibrarySchema);

module.exports = Library;