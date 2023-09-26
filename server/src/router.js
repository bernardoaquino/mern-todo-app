const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

const createTodoRoute = require('./routes/createTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');

const router = express.Router();

// Login route
const loginRoute = require('./routes/loginRoute');
router.post('/login', loginRoute);

// Todo routes with isLoggedIn middleware
router.use('/todos', isLoggedIn);
router.post('/todos', createTodoRoute);
router.get('/todos', readTodosRoute);
router.put('/todos/:id', updateTodoRoute);
router.delete('/todos/:id', deleteTodoRoute);

module.exports = router;
