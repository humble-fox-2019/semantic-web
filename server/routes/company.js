const router = require('express').Router()
const CompanyController = require('../controllers/company')
router.get('/', CompanyController.getAllCompany)
router.post('/', CompanyController.registerCompany)
router.delete('/', CompanyController.removeCompany)
router.patch('/', CompanyController.patchCompany)
module.exports = router