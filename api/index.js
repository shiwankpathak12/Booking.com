import express from "express";
import dotenv from "dotenv"
import mongoose from 'mongoose'
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
dotenv.config()
const app=express()
app.use(cookieParser())
app.use(express.json())
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongodb')
    } catch (error) {
        throw error;
    }
}
//middlewares
app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',roomsRoute)

app.listen(9000,()=>{
    connect()
    console.log('server started')
})