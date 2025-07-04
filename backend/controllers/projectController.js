const Project = require('../models/Project');
const User = require('../models/User');

exports.createProject = async (req, res, next ) => {
  const { users, name, description, tag, owner, slug, image } = req.body;
  const newProject = new Project({
    owner,
    users,
    name,
    description,
    tag,
    slug,
    image
  });
  try {
    const savedProject = await newProject.save();
    await User.findByIdAndUpdate(owner, { $push: { projects: newProject._id } });
    res.status(201).json(savedProject);
  } catch (err) {
    console.log(err.message)
    res.status(400).json({ error: err.message})
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('owner', 'first_name last_name primary_email').populate('tasks').populate('users', 'username firstName lastName');
    // console.log(projects)
    // Project.find()
    //   .populate('owner', 'first_name last_name primary_email')
    //   .populate('tasks')
    //   .populate('users', 'username first_name last_name')
    //   .then(project => {
    //     // console.log(project)
    //     res.json({project});
    //   })
    res.json({Status: 200, projects})
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects'})
  }
};

exports.getProjectById = async (req, res, next ) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('owner')
      .populate('tasks')
      .populate('users', 'username first_name last_name')
    if (!project) return res.status(404).json({ error: `Project not found`});
    console.log(project)
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects'})
  }
};

exports.updateProject = async (req, res, next ) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true})
    res.json(updatedProject)
  } catch (error) {
    res.status(500).json({ error: `Error updating project with id: ${req.params.id}`})
  }
};

exports.deleteProject = async (req, res, next ) => {
  try {
    await Project.findByIdAndDelete(req.params.id, req.body, { new: true});
    res.json({ message: 'Project deleted'});
  } catch (error) {
    res.status(400).json({ error: `Error deleting project with id: ${req.params.id}`})
  }
};