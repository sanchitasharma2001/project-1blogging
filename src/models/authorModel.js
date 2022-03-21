const mongoose = require("mongoose")
const validator = require("validator")
const authorSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        enum: ["Mr", " Mrs", "Miss"]
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");

            }
        }
    },
    password: {
        type: String,
        required: true
    }


}, { timestamps: true })
module.exports = mongoose.model("authorModel", authorSchema)
