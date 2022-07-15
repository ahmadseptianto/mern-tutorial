registerUser, 
loginUser, 
getMe } = require('../controllers/userController')

const { protect } = require("../middleware/authMiddleware")
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me',protect, getMe)