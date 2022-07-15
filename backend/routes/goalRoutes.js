const { getGoals } = require('../controllers/goalController')


router.get('/', getGoals)