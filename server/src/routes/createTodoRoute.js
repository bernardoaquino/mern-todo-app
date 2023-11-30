const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  try {
    const { text } = req.body;
    const todo = new TodoModel({
      text,
      completed: false,
    });
    const newTodo = await todo.save();
    res.status(201).json(newTodo); // 201 Created status code for successful creation
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
      message: 'Failed to create a new todo.',
    }); // 500 Internal Server Error for server-side errors
  }
};
