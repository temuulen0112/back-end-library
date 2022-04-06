const express = require('express');
const Library = require('../models/Library');

const get_books = (req, res, next) => {
    Book.find({}, function (err, data) {
        if (err)
            res.json({
                success: false,
                data: err,
            });
        else
            res.json({
                success: true,
                data: data
            })
    })
}

const add_book = (req, res, next) => {
    const data = req.body;
    Book.create(data, function (err, data) {
        if (err) res.json({
            success: false,
            data: err
        });
        else
            res.json({
                success: true,
                data: data
            })
    })
}

const delete_books = (req, res, next) => {
    Book.findOneAndDelete({ isbn: req.params.isbn })
        .then((data) => res.json(data))
        .catch(err => res.json({ success: false, data: err }))
}

const update_book = (req, res, next) => {
    const data = req.body;
    Book.updateOne({ isbn: req.params.isbn }, data, function (err, data) {
        if (err) res.json({
            success: false,
            data: err,
        });
        else
            res.json({
                success: true,
                data: data,
            });
    });
}

module.exports = {
    get_books,
    add_book,
    delete_books,
    update_book
}