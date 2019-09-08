const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The item must have a name'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'The item must have a price']
    },
    qty: {
        type: Number,
        default: 1 
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
})
itemSchema.plugin(uniqueValidator)

const Item = mongoose.model('Item', itemSchema)
module.exports = Item