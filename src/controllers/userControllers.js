const db = require('../db/db');
const bcrypt = require('bcrypt');

// Registrar Usuario
exports.register = (req, res) => {
    const { firstName, lastName, email, password, age } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = 'INSERT INTO users (firstName, lastName, email, password, age) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, hashedPassword, age], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('User registered');
    });
};

// Login Usuario
exports.login = (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';
    
    db.query(query, [email], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send('User not found');

        const user = results[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) return res.status(401).send('Invalid password');

        res.status(200).send('Login successful');
    });
};
