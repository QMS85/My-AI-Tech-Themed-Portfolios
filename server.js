const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Extremely Secure Headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"], // Allowed for inline UI scripts
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https://via.placeholder.com"]
        }
    }
}));
// Serve static files from the 'public' directory (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
// Catch-all route to serve the main portfolio
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`[SYSTEM INFO] Secure server running optimally on port ${PORT}`);
});