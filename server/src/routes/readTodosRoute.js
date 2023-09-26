const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos); // 200 OK status for successful retrieval
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve todos' }); // 500 Internal Server Error for server-side errors
  }
};
