const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: '34.27.144.22',
    user: 'root',
    password: '%%56Hu3#PB:zdy%D',
    database: 'ti_workshop_julian',
    port: 3306
});

connection.connect((error) => {
    if (error) {
        console.error('Failed to connect to the database:', error);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/jobList', (req, res) => {
    const query = 'SELECT * FROM jobs';

    connection.query(query, (error, results) =>{
        if (error) {
            connection.error('Failed to retrieve jobs from the database:', error);
            res.status(500).json({ error: "Failed to retrieve jobs from the database"});
        } else {
            res.json(results);
        }
    });
});

app.post('/jobAdd', (req, res) => {
    const { id, title, author, description } = req.body;

    if (!id || !title || !author || !description) {
        res.status(400).json({ error: 'Missing required fields'});
        return;
    }

    const query = 'INSERT INTO jobs (id, title, author, description) VALUES (?,?,?,?)';
    const values = [id, title, author, description];

    connection.query(query, values, (error, result) => {
        if (error) {
            console.error('Failed to add job to the database:', error);
            res.status(500).json({ error: 'Failed to add job to the database.'});
        } else {
            res.status(201).json({ id, title, author, description });
            console.log('Added Job: ', {id, title, author, description});
        }
    });
});
    
app.delete('/jobDelete', (req,res) => {

})

app.put('jobEdit', (req, res) => {

})
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});