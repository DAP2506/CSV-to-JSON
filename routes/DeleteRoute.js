const router = require('express').Router();
const DeleteController = require('../controllers/DeleteController');



//deletea particular file       "/delete/:fileName"
router.delete('/:fileName', DeleteController.deleteFile );


//delete all the files that we have     "/file/deleteALl"
router.delete('/all', DeleteController.deleteAll );



module.exports = router;





