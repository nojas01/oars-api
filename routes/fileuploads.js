// route to store a file with its own filename.
// This might be changed to include more fields as to rename the file.
// renaming can be done in the filename function see examples on:
// https://www.npmjs.com/package/multer

const express = require('express')
const multer  = require('multer')
const fs = require('fs')
const passport  = require('../config/auth')
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

  .get('/trainings/:id/readfile', passport.authorize('jwt', {session: false }), (req, res, next) => {
   const id = req.params.id
   const fileToSend = './uploads/' + id + '.json'
   const data = fs.readFile(fileToSend, 'utf8', function (err, data) {
      if (err) throw err;
        obj = JSON.parse(data);
      res.send(JSON.stringify(obj));

})
})
module.exports = router;
