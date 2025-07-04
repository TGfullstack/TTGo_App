const express = require('express');
const router = express.Router();
const Task = require('../models/Task')
const User = require('../models/User');
const Project = require('../models/Project');
const { createTask, getTasks, getTaskById, updatedTask, deleteTask } = require('../controllers/taskController');

/** 
 * Create a new task
 * @method POST
 * @path api/v1/tasks
 * @return 
 * */
router.post('/', createTask);

/** 
 * GET all tasks
 * @method GET
 * @path api/v1/tasks
 * @return all tasks
 **/
router.get('/', getTasks);

/** 
 * GET Tasks by ID 
* @method GET
* @path api/v1/tasks/{id}
* @return return Todo by Id
* */
router.get('/:id', getTaskById);

/** 
 * Patch Tasks By ID
 * @method PATCH
 * @path api/v1/tasks/{id}
 * @return 
 * */
router.patch('/:id', updatedTask);

/** 
 * DELETE Tasks By ID
 * @method DELETE
 * @path api/v1/tasks/{id}
 * @return 
 * */
router.delete('/:_id', deleteTask);
module.exports = router;
