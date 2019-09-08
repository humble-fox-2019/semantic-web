const router = require('express').Router()
const userRouter = require('./user')
const companyRouter = require('./company')
const itemRouter = require('./item')
router.get('/', (req, res, next)=>{
    res.status(200).json({message: "server is on!"})
})
router.use('/company', companyRouter)
router.use('/users', userRouter)
router.use('/items', itemRouter)
module.exports = router