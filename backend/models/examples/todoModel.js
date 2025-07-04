const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  content: { type: String, required: true },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Todo', TodoSchema);