const express = require('express');
require('dotenv').config();
require('./db');
const csvParser = require('csv-parser');
const bodyParser = require('body-parser');
const HomeRoute = require('./routes/HomeRoute');

const app = express();

// app.get('/',(req,res) =>{
//     // console.log("hi");
// });

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));



app.use('/', HomeRoute );
// app.use('/upload', HomeRoute );
// app.use('/reset', HomeRoute );





const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port} port!`);   
});
