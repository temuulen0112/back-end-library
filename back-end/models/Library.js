const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
    name: {
        type: String,
        required: [true, "Book name must be filled!"],
    },
    price: {
        type: Number,
    },
    author: {
        type: String,
        required: [true, "Book author must be filled!"]
    },
    isbn: {
        type: Number,
        length: 10
    },
    publishdate: {
        type: Date,
        required: [true, "Published Date must be filled!"]
    },
})

const Library = mongoose.model("library", LibrarySchema);

module.exports = Library;