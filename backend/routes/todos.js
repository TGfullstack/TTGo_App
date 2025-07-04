const express = require('express');
const router = express.Router();
const Task = require('../models/Task')
const Todo = require('../models/Todo');
const { getTasks } = require('../controllers/taskController');
const { getTodoById, deleteTodo, updatedTodo, createTodo, getTodos } = require('../controllers/todoController');

/** 
 * Create a new todo
 * @method POST
 * @path api/v1/todos/
 * @return 
 * */
router.post('/', createTodo);
/** 
 * GET all todos
 * @method GET
 * @path api/v1/todos/
 * @return all todos
 **/
router.get('/', getTodos);
/** 
 * GET Todo by ID 
* @method GET
* @path api/v1/todos/{id}
* @return return Todo by Id
* */
router.get('/:id', getTodoById)
/** 
 * PUT Todo By ID
 * @method PUT
 * @path api/v1/todos/{id}
 * @return 
 * */
router.put('/:id', updatedTodo);
/** 
 * DELETE Todo By ID
 * @method DELETE
 * @path api/v1/todos/{id}
 * @return 
 * */
router.delete('/:id', deleteTodo);

module.exports = router;
