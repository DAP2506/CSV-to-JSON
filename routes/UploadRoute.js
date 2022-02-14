const router = require('express').Router();
const UploadController = require('../controllers/UploadController');


//upload Controller     "/"
router.post('/',UploadController.upload );
    



module.exports = router;



