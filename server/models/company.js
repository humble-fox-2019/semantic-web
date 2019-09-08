const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const companySchema = new Schema({
    name: {
        type: String,
        required: [true, 'The company must have a name'],
        unique: true
    },
    address: {
        type: String,
        required: [true, 'The company must have an address']
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})
companySchema.plugin(uniqueValidator)

const Company = mongoose.model('Company', companySchema)
module.exports = Company