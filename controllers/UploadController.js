const File = require('../models/file');
const bodyParser = require('body-parser');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');




// upload a file
exports.upload = async (req, res) => {
    try {

        const { id,  trade_type, quantity, price, average } = req.body;

        const file = await File.create({ id: id, trade_type: trade_type, quantity: quantity, price: price, average: average});

        res.status(200).json({ status: "success", msg: "Uploaded Successfully", data: file });


    }
    catch (err) {
        res.status(500).json({ status: "failed", msg: err.message });
        console.log(err);
    }


}


