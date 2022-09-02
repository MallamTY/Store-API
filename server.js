const express = require('express')
const morgan = require('morgan')


const {PORT, MONGO_URI} = require('./accessories/configuration');


const notFoundMiddlewarev = require('./errors/notFoundError')
const errorHandlerMiddleware = require('./errors/generalError');
const connectDB = require('./db/connect');



const app = express();




app.use(morgan('common'))
app.use(express.json())
app.use(notFoundMiddlewarev)
app.use(errorHandlerMiddleware)


const start = async() => {
    try {
        const port = PORT || 3000

        await connectDB(MONGO_URI)
        .then(() => console.log(`\n Connection to the Store-API database has been established`))
        app.listen(port, () => {
            console.log(`\n \n Server listen on port ${port} ...`)
        })
    } catch (error) {
        console.log(error);
    }
}


start()


