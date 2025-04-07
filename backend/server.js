
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rishav@1122',
  database: 'fish'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('User registered successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 // Create the table if it doesn't exist
 const createTableQuery = `
 CREATE TABLE IF NOT EXISTS ckbend (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(100),
   email VARCHAR(100) NOT NULL UNIQUE,
   password VARCHAR(100) NOT NULL
 )
`;

db.query(createTableQuery, (err, result) => {
 if (err) {
   console.error('Failed to create ckbend table:', err);
 } else {
   console.log('ckbend table ensured.');
 }
});
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM ckbend WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error during login:', err);
      return res.status(500).send('Server error');
    }

    if (results.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

const createUsersTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
  )
`;

db.query(createUsersTableQuery, (err, result) => {
  if (err) {
    console.error('Error creating users table:', err);
  } else {
    console.log('Users table ensured ✅');
  }
});
const contactTableQuery = `
  CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

db.query(contactTableQuery, (err) => {
  if (err) {
    console.error('Failed to create contacts table:', err);
  } else {
    console.log('Contacts table ready');
  }
});
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Failed to save contact message:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(200).json({ message: 'Message sent successfully' });
  });
});
