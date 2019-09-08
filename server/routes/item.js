const router = require('express').Router()
const ItemController = require('../controllers/item')
router.get('/', ItemController.getAllItem)
router.post('/', ItemController.registerItem)
router.delete('/', ItemController.removeItem)
router.patch('/', ItemController.patchItem)
module.exports = router