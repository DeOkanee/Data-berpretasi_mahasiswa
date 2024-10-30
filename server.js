const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware keamanan tambahan
app.use((req, res, next) => {
    // Security headers
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Routes untuk Akademik-2024
app.get('/Akademik-2024', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Akademik-2024', 'akademik-2024.html'));
});

app.get('/Akademik-2024/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Akademik-2024', 'upload.html'));
});

// Serve static files untuk Akademik-2024
app.use('/Akademik-2024', express.static(path.join(__dirname, 'public', 'Akademik-2024')));

app.get('/akademik-2023', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'akademik-2023.html'));
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

// Handle 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

// Vercel specific
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;