const Company = require('../models/company')
class ItemController {
    static registerCompany(req, res, next){
        const { name, address } = req.body
        console.log(req.decode)
        Company.create({
            name, address, userId: req.decode._id
        })
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(next)
    }
    static patchCompany(req, res, next){
        const { name, address } = req.body
        const { _id } = req.params
        Company.findOneAndUpdate({
            _id
        }, {
            name, address
        }, {new:true})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }
    static getAllCompany(req, res, next){
        Company.find({
            userId: req.decode._id
        })
        .then(company => {
            res.status(200).json(company)
        })
        .catch(next)
    }
    static removeCompany(req, res, next){
        const { _id } = req.params
        Company.findByIdAndDelete({
            _id
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}
module.exports = ItemController