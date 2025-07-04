const mongoose = require('mongoose');
const {Schema, model, models} = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Enter a title for the Todo']
  },
  status: {
    type: String,
    enum: ['new', 'todo', 'in-progress', 'pending', 'completed'],
    default: 'todo'
  },
  completed: {
    type: Boolean,
    default: false
  },
  description: {type: String},
  project: {
    type: mongoose.Schema.Types.ObjectId
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {timestamps: true});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

module.exports = Todo;