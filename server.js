const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enables CORS
app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files from dist

// Routes
app.post('/sendEmail', async (req, res) => {
    try {
        // Make sure the URL points to where your PHP script is hosted, which might be different in production
        const response = await axios.post('http://localhost/sendEmail.php', req.body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Sending the exact response from PHP script back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({status: 'error', message: 'Error sending email'});
    }
});

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
