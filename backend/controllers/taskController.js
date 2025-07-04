const Task = require("../models/Task");
const Project = require("../models/Project")
const User = require('../models/User')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createTask = async (req, res ) => {
  try {
    const { title, completed, project, user, dueDate, status } = req.body
    const newTask = new Task({
      user,
      project,
      title,
      completed,
      dueDate: new Date(dueDate),
      status
    });
    await newTask.save();

    await Project.findByIdAndUpdate(project, { $push: { tasks: newTask._id}})
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: `Error creating task: ${err}`})
  }
};

exports.getTasks = async (req, res ) => {
  try {
    const user = await User.find()
    const tasks = await Task.find().populate('project').populate('todos')
      // .populate('first_name last_name');
 
    res.json({
      success: true,
      status: 200,
      // message: "Success fetch",
      tasks});
  } catch (err) {
    res.status(500).json({ error: `Error fetching tasks: ${err}`})
  }
};

exports.getTaskById = async (req, res ) => {
  try {
    const task = await Task.findById(req.params.id, req.body, { new: true}).populate('user')
    if (!task) return res.status(404).json({error: 'Task not found.'})
    // const users = await User.find().populate("projects");
    res.status(200).json({
      success: true,
      status: 200,
      // message: "Success fetch for task by id",
      task
    });
  } catch (err) {
    res.status(500).json({ error: err})
  }
};
exports.updatedTask = async(req, res ) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true});
    if (!task) return res.status(404).json({error: 'Task not found.'});
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user'});
  }
};
exports.deleteTask = async(req, res ) => {
  try {
    const task = await Task.findByIdAndDelete(req.params._id, req.body, { new: true});
    if (!task) return res.status(404).json({error: 'Task not found.'})
    res.json('Task deleted');
  } catch (err) {
    res.status(400).json({ error: `Error deleting task: ${err}`})
  }
};