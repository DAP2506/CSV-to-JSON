const router = require('express').Router();
const HomeController = require('../controllers/HomeController');


router.get('/', HomeController.getallFiles );
router.put('/calculate', HomeController.calculate );



module.exports = router;
