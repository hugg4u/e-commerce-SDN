const {Schema, model} = require("mongoose");

const sellerSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true,
        select: false
    },     
    role: {
        type: String,
        default : 'seller'
    },
    status: {
        type: String,
        default : 'active'
    },
    payment: {
        type: String,
        default : 'inactive'
    },
    method: {
        type: String,
        required : true
    },
    image: {
        type: String,
        default : ''
    },
<<<<<<< HEAD
=======
    shopInfo: {
        type: Object,
        default : {}
    },
>>>>>>> upstream/chat
},{ timestamps: true })

sellerSchema.index({
    name: 'text',
    email: 'text', 
},{
    weights: {
        name: 5,
        email: 4, 
    }

})

module.exports = model('sellers',sellerSchema)