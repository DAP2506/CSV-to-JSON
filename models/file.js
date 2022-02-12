const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const storePath = path.join('./uploads');

const FileSchema = new mongoose.Schema({
    filePath: {
        type: String
    },
    fileName: {
        type: String
    },
    file: {
        type: String
    }
},
    {timestamps: true}    
);


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, ".." , storePath));
      },
    filename: (req,file,cb) => {
        cb(null, file.fieldname + ' - ' + Date.now() );
    }
});

// fileSchema.statics.uploadedFile = multer({ storage: storage }).single("file");
// fileSchema.statics.filePath = FILES_PATH;

FileSchema.statics.uploadedFiles = multer({storage: storage }).single("file");
FileSchema.statics.filePath = storePath ;

const File = mongoose.model("Files",FileSchema);
 
 module.exports = File;