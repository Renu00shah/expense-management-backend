const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server running on ${mongoose.Connection.host} `.bgCyan.white)
    } catch (error) {
        console.log(`${error.message}`.bgRed)
    }
 }

module.exports=connectDB