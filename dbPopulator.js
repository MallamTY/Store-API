const { MONGO_URI } = require('./accessories/configuration');
const connectDB = require('./db/connect');
const Product = require('./model/productModel');
const jsonProduct = require('./product.json')




const start = async() => {
    try {
        await connectDB(MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log(`Success ....`);
        process.exit(1)
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
}


start()
