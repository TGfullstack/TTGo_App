
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //? required
  title: { type: String, required: [true, 'Please provide as title for this task.']},
  completed: { type: Boolean, default: false},
  description: { type: String, maxlength: [60, 'Title cannot be more than 60 characters']},
  content: { type: String,},
  status: { type: String, enum: ['pending', 'new', 'todo', 'in-progress', 'completed'], default: 'new'},
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium'},
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo'}], //? required
  dueDate: { type: Date },
  attachment: { type: String }, // new field - link uploaded files to tasks
}, {timestamps: true});

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

module.exports = Task;