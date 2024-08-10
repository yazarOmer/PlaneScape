import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/index"
dotenv.config({ path: "C:/Users/omer_/OneDrive/Masaüstü/PlaneScape/.env"})
import authRoutes from "./routes/auth.route"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server listening on port:", port)
    connectDB()
})

app.use('/api/auth', authRoutes)
