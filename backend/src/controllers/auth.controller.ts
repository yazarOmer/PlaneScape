import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcryptjs from "bcryptjs"
import { setToken } from "../helpers/setToken";
import { JwtPayload } from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body

    try {
        if (!username || !email || !password) {
            throw new Error("All fields are required")
        }

        const isUserExist = await User.findOne({ email })

        if (isUserExist) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10)

        const user = new User({
            username,
            email,
            password: hashedPassword
        })

        await user.save()

        setToken(res, user._id)

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                username: user.username,
                email: user.email,
                id: user._id
            } 
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    

    try {
        if ( !email || !password) {
            throw new Error("All fields are required")
        }

        const user = await User.findOne({ email }).select("+password")

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials"})
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid credentials "})
        }

        setToken(res, user._id)

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
                username: user.username,
                email: user.email,
                id: user._id
            } 
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

export const logout = async (req: Request, res: Response) => {
    res.clearCookie("token")
    res.status(200).json({ success: true, message: "User logged out successfully" })
}

export const checkAuth = async (req: Request & { userId: string | JwtPayload }, res: Response) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found"})
        }

        res.status(200).json({ success: true, user })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message})
    }
}