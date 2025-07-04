const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
}, { timestamps: true });

export default mongoose.model('Project', ProjectSchema);