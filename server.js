const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk home.html di root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Route untuk akademi-2023.html
app.get('/akademi-2023', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'akademi-2023.html'));
});

// Handle 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Menggunakan port dari environment variable untuk Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Export app untuk Vercel
module.exports = app;