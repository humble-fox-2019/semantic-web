const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const companySchema = new Schema({
    name: {
        type: String,
        required: [true, "Name must be filled"],
        min: [5, "Your username needs to be at least 5 letters"],
        unique: [true, "This company is already registered"]
    },
    address: {
        type: String,
        required: [true, "Address must be filled"]
    },
    userId: {
        type:  Schema.Types.ObjectId,
        ref: 'User'
    }
})

companySchema.plugin(uniqueValidator)
const Company = mongoose.model('Company', companySchema)

module.exports = Company