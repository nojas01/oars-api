const express = require('express')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/', (req, res) => {
  res.send('Hello from Express')
})

app.listen(PORT, () => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'oars'
  });

  connection.connect()

  connection.query('SELECT * FROM user', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0])
  })

  console.log(`server is listening on port ${PORT}`);
})
