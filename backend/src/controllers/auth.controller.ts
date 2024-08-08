import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcryptjs from "bcryptjs"
import { setToken } from "../helpers/setToken";

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body

    try {
        if (!username || !email || !password) {
            throw new Error("All fields are required")
        }

        const isUserExist = await User.findOne({ email })

        if (isUserExist) {
            return res.status(400).json({ success: false, message: "User already exists" })
        }

        const hashedPassword = await bcryptjs.hash(password, 10)

        const user = new User({
            username,
            email,
            password: hashedPassword
        })

        await user.save()

        setToken(res, user._id)

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                ...user
            } 
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
    res.send("Login controller")
}

export const logout = async (req: Request, res: Response) => {
    res.clearCookie("token")
    res.status(200).json({ success: true, message: "User logged out successfully" })
}