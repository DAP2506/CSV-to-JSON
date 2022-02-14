//fileCOntroller 
const File = require('../models/file');


//view a particluar file
exports.view = async (req,res) => {
    try{

        
        
    }
    catch(err) {
        res.status(500).json({ msg: err.message });
        console.log(err);
    }


}






