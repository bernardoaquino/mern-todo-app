const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed, text } = req.body;
    const todo = await TodoModel.findByIdAndUpdate(
      id,
      { completed, text },
      { new: true },
    );

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json(todo); // 200 OK status for successful update
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the todo' }); // 500 Internal Server Error for server-side errors
  }
};
