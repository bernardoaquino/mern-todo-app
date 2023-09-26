const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    await todo.deleteOne();
    res.status(204).json(); // 204 No Content status for successful deletion
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the todo' }); // 500 Internal Server Error for server-side errors
  }
};
