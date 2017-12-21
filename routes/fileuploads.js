// route to store a file with its own filename.
// This might be changed to include more fields as to rename the file.
// renaming can be done in the filename function see examples on:
// https://www.npmjs.com/package/multer

const express = require('express')
const multer  = require('multer')
const router = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })

router
  .post('/fileupload', upload.single('training'), (req, res, next) => {
    res.json({message: "file stored"})
  })

module.exports = router;
