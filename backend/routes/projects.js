const express = require('express');
const router = express.Router();
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  fetchProjects,
  getProjectById
} = require('../controllers/projectController')
const Project = require('../models/Project');
const User = require('../models/User')
const Task = require('../models/Task')

/** 
 * Create a new project
 * @method POST
 * @path api/v1/projects
 * @return 
 * */
router.post('/', createProject);

/** 
 * GET all projects
 * @method GET
 * @path api/v1/projects
 * @return all projects
 **/
router.get('/', getProjects);

/** 
 * GET Project by ID 
* @method GET
* @path api/v1/projects/{id}
* @return return projects by Id
* */
router.get('/:id', getProjectById);

/** 
 * PUT UPDATE Project By ID
 * @method PUT
 * @path api/v1/projects/{id}
 * @return 
 * */
router.put('/:id', updateProject);

/** 
 * DELETE Projects By ID
 * @method DELETE
 * @path api/v1/projects/{id}
 * @return 
 * */
router.delete('/:id', deleteProject);

module.exports = router;