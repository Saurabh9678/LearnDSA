const express = require("express");
const cookieParser = require("cookie-parser")
const errorMiddleware = require("./middleware/error")


const app = express();
app.use(express.json())
app.use(cookieParser())

//Route Imports
const userRoutes = require("./routes/userRoute")
const contentRoutes = require("./routes/contentRoute")


app.use("/api/v1", userRoutes)
app.use("/api/v1", contentRoutes)


// MiddleWare for Error

app.use(errorMiddleware)

module.exports = app