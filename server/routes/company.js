const router = require('express').Router()
const CompanyController = require('../controllers/company')
const authenticate = require('../middlewares/authenticate')
router.use(authenticate)
router.get('/', CompanyController.getAllCompany)
router.post('/', CompanyController.registerCompany)
router.patch('/:_id', CompanyController.patchCompany)
router.delete('/:_id', CompanyController.removeCompany)

module.exports = router