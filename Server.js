const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./confiq/connectDb');

// confiq dotenv file
dotenv.config()

// database call
connectDB()

// rest objects
const app = express();

// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// routes
// user route
app.use('/api/v1/users', require('./routes/userRoute'))

// transaction routes
app.use("/api/v1/transactions",require("./routes/transactionRoutes"))

// routes
app.get("/", (req, res) => {
    res.send("<h1>Hello from the Server</h1>")
})

// port
const PORT = 8080 || process.env.PORT

// listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})