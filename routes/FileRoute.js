const router = require('express').Router();
const FileController = require('../controllers/FileController');

// to view a particular file
router.get('/:fileName', FileController.view );
    



module.exports = router;
