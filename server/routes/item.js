const router = require('express').Router()
const ItemController = require('../controllers/item')

const authenticate = require('../middlewares/authenticate')
router.use(authenticate)

router.get('/:companyId/', ItemController.getAllItem)
router.post('/:companyId/', ItemController.removeItem)
router.patch('/:_id', ItemController.patchItem)
router.delete('/:_id', ItemController.removeItem)

module.exports = router