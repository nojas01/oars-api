// route to store a file with its own filename.
// This might be changed to include more fields as to rename the file.
// renaming can be done in the filename function see examples on:
// https://www.npmjs.com/package/multer

const express = require('express')
const multer  = require('multer')
const passport  = require('../config/auth')
const {promisify} = require('util')
const fs = require('fs')
const readFileAsync = promisify(fs.readFile)
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
   const fileToRead = './uploads/' + id + '.json'

   readFileAsync(fileToRead, {encoding: 'utf8'})
     .then((data) => {
       const dataToSend = JSON.parse(data)
       res.json(dataToSend)
     })
     .catch((err) => {console.log('ERROR', err)})
})

module.exports = router
