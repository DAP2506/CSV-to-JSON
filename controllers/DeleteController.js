// deleteController
const File = require('../models/file');


// delete a particular file
exports.deleteFile = async (req,res) => {
    try{

        const fileName = req.params.fileName;

        let isFilePresent = await File.find({fileName: fileName});

        if(isFilePresent){
            await File.deleteOne({ fileName: fileName });
            res.status(200).json({msg: fileName+" Deleted Successfully" });

        }
        else{
            console.log("No such file is there ");
            res.status(400).json({  status:"success" , msg: "No such file is there "});
        }


        
    }
    catch(err) {
        res.status(500).json({ status:"failed" , msg: err.message });
        console.log(err);
    }


}

//delete all files
exports.deleteAll = async (req,res) => {
    try{

        await File.deleteMany({});
        res.status(200).json({ status:"success" ,msg: "Successfully deleted evey csv file"});
        
    }
    catch(err) {
        res.status(500).json({ status:"falied" ,msg: err.message });
        console.log(err);
    }


}

