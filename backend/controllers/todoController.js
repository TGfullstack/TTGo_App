const Task = require("../models/Task");
const Project = require("../models/Project")
const User = require('../models/User')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Todo = require("../models/Todo");

exports.createTodo = async (req, res ) => {
  try {
    const { title, completed, tasks, userId } = req.body
    const newTodo = new Todo({
      title,
      completed,
      userId
    });
    await newTodo.save();

    await Task.findByIdAndUpdate(tasks, { $push: { tasks: newTodo._id}})
    res.status(201).json(newTodo);
  } catch (err) {

    res.status(500).json({ error: `Error creating todo: ${err}`})
  }
};

exports.getTodos = async (req, res ) => {
  try {
    const todos = await Todo.find().populate('user').populate('tasks')
 
    res.json({
      Status: 200,
      message: "Success fetch",
      todos});
  } catch (err) {
    res.status(500).json({ error: `Error fetching todos: ${err}` })
  }
};

exports.getTodoById = async (req, res ) => {
  try {
    const todo = await Todo.findById(req.params.id).populate('tasks');
    if (!todo) return res.status(404).json({ error: `Todo not found`})     
    
    // const users = await User.find().populate("projects");
    res.status(200).json({
      status: 200,
      message: `Success fetch for todo by id: ${req.params._id} `,
      todo
    });
  } catch (err) {
    res.status(500).json({ error: err})
  }
};

exports.updatedTodo = async(req, res ) => {
  try {
    const { id } = req.params;

    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true});
    res.json(updatedTodo)
  } catch (err) {
    res.status(400).json({ error: `Error updating todo with id: ${req.params.id}`})
  }
};

exports.deleteTodo = async(req, res ) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).json({ message: 'Todo deleted'});
  } catch (error) {
    res.status(400).json({ error: `Error deleting todo with id: ${req.params.id}`, })
  }
};