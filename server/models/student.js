const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
    },
    spec: {
        type: String,
    },
    group: {
        type: String,
    },
    age: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    color: {
        type: String,
    },
    img: {
        type: String,
    },
    email: {
        type: String,
    }
}, {
    collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)