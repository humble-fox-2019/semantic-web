const router = require('express').Router()
const userRouter = require('./user')
const companyRouter = require('./company')
router.get('/', (req, res, next)=>{
    res.status(200).json({message: "server is on!"})
})

router.use('/users', userRouter)
router.use('/company', companyRouter)
module.exports = router