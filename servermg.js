const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));


mongoose.connect('mongodb+srv://khusimaharana2005:0T4jp5h0hlHirQW0on.u0qcf.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });


const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String 
});

const Product = mongoose.model('Product', productSchema);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });


app.post('/api/products', upload.single('image'), async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file.path 
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
