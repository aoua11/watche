const watchesController = require('../controllers/watchesControllers');
const express = require('express');
const validation  = require('../validations/watchesvalidation');
const errorhandler = require('../middlewears/errorHandler');
const validator = require('../middlewears/validator.middelwears');
const objectid = require('../middlewears/objectid.middlewears')
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: "public/uploads/"})







router.get('/watches',errorhandler (watchesController.index));
router.post('/watches',upload.single("image"), validator(validation.store) , errorhandler (watchesController.store));
router.get('/watches/:id', objectid ,errorhandler (watchesController.show));
router.put('/watches/:id',objectid , validator(validation.store) ,errorhandler(watchesController.update));
router.delete('/watches/:id', errorhandler (watchesController.delete));





module.exports  = router;