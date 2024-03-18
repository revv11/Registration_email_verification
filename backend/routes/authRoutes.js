const {Router} = require("express")
const authController = require('../controllers/authControllers.js')


const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup',authController.signup_post );

router.get('/confirmation/:token', authController.confirmation_get)

module.exports = router;