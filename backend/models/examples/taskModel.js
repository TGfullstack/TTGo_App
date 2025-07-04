const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  dueDate: { type: Date },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  attachment: { type: String }, // new field - link uploaded files to tasks
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);
