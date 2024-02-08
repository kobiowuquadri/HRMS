const multer = require('multer');


// Define storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null,Date.now() + '-' + file.originalname); // Rename the file to include the timestamp
    },
  });
  
  // Initialize Multer with the storage configuration
  const upload = multer({ storage: storage })


  module.exports = upload