const File = require('../models/file');
const fs = require('fs');
const path = require('path');

exports.getallFiles = async (req,res) => {
    try{

        const files = await File.find({});

        res.status(200).json({ status: "success", data: { files }});
    }
    catch(err) {
        res.status(500).json({ msg: err.message });
        console.log(err);
    }
}