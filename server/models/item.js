const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name must be filled"]
    },
    price: {
        type: Number,
        required: [true, "Item must have a price"]
    },
    companyId: {
        type:  Schema.Types.ObjectId,
        ref: 'Company'
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item