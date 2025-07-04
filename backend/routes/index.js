const express = require('express');
const router = express.Router();

/**
 * GET home page.
 * @method GET
 * @path /
 * @returns JSON({title: 'Express Health Check'})
 */
router.get('/', function(req, res, next) {
  res.status(200).json({ 
    title: 'Express Health Check' });
});

module.exports = router;
