// server/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// GET all todos
router.get('/', todoController.getTodos);

// POST a new todo
router.post('/', todoController.createTodo);

// PUT to update a todo by id
router.put('/:id', todoController.updateTodo);

// DELETE a todo by id
router.delete('/:id', todoController.deleteTodo);

module.exports = router;