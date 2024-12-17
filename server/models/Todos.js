const { create } = require("domain");
const mongoose = require("mongoose");
const { title } = require("process");
const Schema = mongoose.Schema;



const TodoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", TodoSchema);