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
   const fileToRead = './uploads/1.json'
   Number.prototype.toRadians = function() {
     return this * Math.PI / 180;
   }

   const distance = (lat1,lat2,lon1,lon2) => {
     var R = 6371e3; // metres
     var f1 = lat1.toRadians();
     var f2 = lat2.toRadians();
     var Df = (lat2-lat1).toRadians();
     var Dl = (lon2-lon1).toRadians();
     var a = Math.sin(Df/2) * Math.sin(Df/2) +
     Math.cos(f1) * Math.cos(f2) *
     Math.sin(Dl/2) * Math.sin(Dl/2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
     var d = (R * c) ;

     return d;
   }

   readFileAsync(fileToRead, {encoding: 'utf8'})
     .then((data) => {
       let j = 1
       let tempData = []
      for (var k=1;k<data.length-1;k++){
         j++;
         if (data[k][8] === data[j][8]){
           if (distance(Number.parseFloat(data[k][3]),Number.parseFloat(data[j][3]),Number.parseFloat(data[k][4]),Number.parseFloat(data[j][4])) < 1)
           {continue;}

         }
      tempData.push(data[k]);
    }

       res.json(tempData)
     })
     .catch((err) => {console.log('ERROR', err)})
})

module.exports = router
