
const mongoose = require('mongoose');
const { MONGO_URI } = require('../accessories/configuration');


const connectDB = (url) => {
   return mongoose.connect(url, {
        useNewUrlParser : true,
        // useCreateIndex: true,
        // userUnifiedTopolgy: true, 
        // useFindAndMondify: false
    })
    
}


module.exports = connectDB