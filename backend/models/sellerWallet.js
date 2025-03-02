const {Schema, model} = require("mongoose");

const sellerWalletSchema = new Schema({
    sellerId: {
        type: Schema.ObjectId,
        ref: 'user',
        required : true
    },
    amount: {
        type: Number,
        required : true
    },
    month: {
        type: Number,
        required : true
    },
    year: {
        type: Number,
        required : true  
    } 
},{ timestamps: true })

module.exports = model('sellerWallets',sellerWalletSchema)