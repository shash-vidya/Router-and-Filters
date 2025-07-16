const express = require('express');
const app = express();
const PORT = 4000;

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Import the router
const productsRouter = require('./routes/products');

// Use the router
app.use('/products', productsRouter);

// Add additional categories routes directly or modularize them similarly
app.get('/categories', (req, res) => {
    res.send("Here is the list of all categories.");
});

app.post('/categories', (req, res) => {
    res.send("A new category has been created.");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
