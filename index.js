const conn = require('./connection.js');
const express = require('express');
const app = express();
const port = 3000;
const hostname = 'localhost';




conn.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
  
    console.log('Connected to the database.');
  
    // Release the connection when done with it
    connection.release();
  });

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { userData: null });
});


app.get('/add', (req, res) => {
  res.render('add', { userData: null });
});


app.get('/see', (req, res) => {

  const query = 'SELECT * FROM users';
  conn.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.render('see', { users: results });
  });
  // res.render('see', { userData: null });
});




app.listen(port, () => {
  console.log(`Server is running on port ${port} on ${hostname}`);
});