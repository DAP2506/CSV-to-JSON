const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const storePath = path.join('./uploads');

const FileSchema = new mongoose.Schema({

    id: {
        type: Array,
        default: [],

    },
    trade_type: {
        type: Array,
        default: [],
    },
    quantity: {
        type: Array,
        default: [],
    },
    price: {
        type: Array,
        default: [],
    },
    average: {
        type: Array,
        default: [],
    }
    
},
    {timestamps: true}    
);


const File = mongoose.model("files", FileSchema );
 
 module.exports = File;