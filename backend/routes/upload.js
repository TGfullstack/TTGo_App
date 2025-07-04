const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require('../middleware/upload');
const fs = require('fs');
const Task = require('../models/Task');
// Single file upload
router.post('/task', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded'});
  }
  res.status(200).json({
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
});

router.post('/image', upload.single('image', (req, res) => {
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl});
}))
router.post('/attachment', upload.single('file', (req, res) => {
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl});
}))

router.delete('/', (req, res) => {
  const filePath = req.query.filepath;

  if (!filePath) {
    return res.status(400).json({ error: 'No Filepath specified'});
  }

  const fullPath = path.join(__dirname, '..', filePath);

  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error('File deletion error:', err);
      return res.status(500).json({ error: 'Could not delete file'});
    }

    res.status(200).json({ message: 'File deleted successfully'});
  });


});
module.exports = router;