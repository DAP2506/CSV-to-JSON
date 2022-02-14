const express = require('express');
require('dotenv').config();
require('./db');
const cors = require('cors');
const csvParser = require('csv-parser');
const bodyParser = require('body-parser');
const HomeRoute = require('./routes/HomeRoute');
const FileRoute = require('./routes/FileRoute');
const UploadRoute = require('./routes/UploadRoute');
const DeleteRoute = require('./routes/DeleteRoute');

const app = express();

// app.get('/',(req,res) =>{
//     // console.log("hi");
// });

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());



app.use('/', HomeRoute );
app.use('/upload', UploadRoute );
app.use('/file',FileRoute );
app.use('/delete', DeleteRoute );





const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port} port!`);   
});
