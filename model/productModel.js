const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');


const productShcema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Prodcut name must be supplied !!!!!!!!!!!`]

    },
    price: {
        type: Number,
        required: [true, `Product price must be supplied !!!!!!!!!`]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    company:{
        type: String,
        enum: {
            values: ['ShoAds & Sons Construction Company', 'MallamTY & Sons', 'Aloma Group of Company', 'Kheffy Fashion House'],
            message: `{values} is not a registered company`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productShcema)