import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/index"
dotenv.config({ path: "C:/Users/omer_/OneDrive/Masaüstü/PlaneScape/.env"})

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server listening on port:", port)
    connectDB()
})

app.get('/', (req: Request, res: Response) => {
    res.send("hello world")
})