const multer = require('multer');
const path = require('path');


// Define storage for uploaded files
const storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
  })
  
  // Initialize Multer with the storage configuration
  const upload = multer({ storage: storage })


  module.exports = upload