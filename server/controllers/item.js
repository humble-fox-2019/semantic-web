const Item = require('../models/item')
class ItemController {
    static registerItem(req, res, next){
        const { name, price} = req.body
        Item.create({
            name, price, companyId: req.params.companyId
        })
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(next)
    }
    static patchItem(req, res, next){
        const { name, price } = req.body
        const { _id } = req.params
        Item.findOneAndUpdate({
            _id
        }, {
            name, price
        }, {new:true})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }
    static getAllItem(req, res, next){
        Item.find({
            companyId: req.params.companyId
        })
        .then(item=> {
            res.status(200).json(item)
        })
        .catch(next)
    }
    static removeItem(req, res, next){
        const { _id } = req.params
        Item.findByIdAndDelete({
            _id
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}
module.exports = ItemController