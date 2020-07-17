const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const path = require('path');

const DIR = path.join(__dirname, '../public');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// User model
const Student = require('../models/student');

router.post('/students', upload.single('img'), (req, res, _next) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        img: req.file ? '/public/' + req.file.filename : '',
        age: req.body.age,
        rating: req.body.rating,
        color: req.body.color,
        group: req.body.group,
        spec: req.body.spec,
        email: req.body.email,
    });
    student.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            userCreated: {
                _id: result._id
            }
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    })
})

router.delete("/students/:id", (req, res, _next) => {
    Student.findOneAndRemove({_id: req.params.id}, (err) => {
        if (err) {
            return res.sendStatus(404);
        }
        return res.sendStatus(204);
    });
});

router.get("/students", (req, res, _next) => {
    Student.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            students: data
        });
    });
});

module.exports = router;