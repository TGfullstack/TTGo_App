const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files in /uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// File filter (optional)
const fileFilter = (req, file, cb) => {
  // Accept all file types or restrict by mimetype
  cb(null, true);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;