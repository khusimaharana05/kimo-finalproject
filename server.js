const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let products = [
    { id: 1, name: "Product 1", description: "Description of product 1." },
    { id: 2, name: "Product 2", description: "Description of product 2." },
    // Add more products
];

let orders = [];

// Get products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Place order
app.post('/api/orders', (req, res) => {
    const order = req.body.order;
    orders.push(order);
    res.json({ message: "Order placed successfully!", order });
});

// Get orders
app.get('/api/orders', (req, res) => {
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
