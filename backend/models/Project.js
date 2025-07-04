const mongoose = require('mongoose');
const slugify = require('slugify')
const projectSchema = new mongoose.Schema({
  // projectId: new mongoose.Schema.Types.ObjectId(),
  owner: { type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: { type: String, required: [true, 'Project name is required']},
  description: {type: String, maxlength: [60, 'Project description cannot be more than 60 characters.']},
  tag: [{type: String,}],
  slug: { type: String, unique: true},
  image: {type: String},
  users: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    //required: true, 
    ref: 'User'
  }],
  tasks: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    //required: true, 
    ref: 'Task'
  }],
}, {timestamps: true});

projectSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true});
  }
  next();
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

module.exports = Project;