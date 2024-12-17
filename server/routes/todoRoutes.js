const express = require("express");
const router = express.Router();

const Todo = require("../models/Todos");

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.completed = req.body.completed;
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        await todo.deleteOne();
        res.json({ message: "Todo Deleted Successfully...." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;


