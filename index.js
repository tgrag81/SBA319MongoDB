const express = require('express')
const app = express ()
const mongoose = require ('mongoose')
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello From Node API");
}
);


mongoose.connect("mongodb+srv://redleg81:77QJ4BgnNwI8RjsZ@sba.vy7u5.mongodb.net/?retryWrites=true&w=majority&appName=SBA")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, ()=> {
        console.log('Server is running on port 3000');
    });

}) .catch(() => { console.log("Failed to Connect");

});
