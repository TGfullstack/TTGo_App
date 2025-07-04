const express = require('express');
const router = express.Router();
const { createUser, getUserById, getUsers,updateUser, deleteUser } = require('../controllers/userController');
const User = require('../models/User');
const protect = require('../middleware/auth');

/* POST register user. */
/** 
 * Create a new Users
 * @method POST
 * @path api/v1/users/
 * @return 
 * */
router.post('/', createUser);

/* POST login. */
// router.post('/login', loginUser);

/** 
 * GET Users by ID 
* @method GET
* @path api/v1/users/{id}
* @return return users by Id
* */
router.get('/:id', getUserById);

/** 
 * !ERROR
 * Todo protect route using auth middleware
* GET profile
* @method GET
* @desc Protected route
* @path api/v1/users/{id}
* @return return profile
* */
// router.get('/profile', protect, (req,res) => {
//   res.json(req.user)
// })
/** 
 * GET all Users
 * @method GET
 * @path api/v1/users
 * @return all users
 **/
router.get('/', getUsers);

/** 
 * PUT Users By ID
 * @method PUT
 * @path api/v1/users/{id}
 * @return 
 * */
router.put('/:id', updateUser);

/** 
 * DELETE Users By ID
 * @method DELETE
 * @path api/v1/users/{id}
 * @return 
 * */
router.delete('/:id', deleteUser);

module.exports = router;
