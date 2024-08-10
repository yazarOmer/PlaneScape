import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"

export const verifyToken = (req: Request & { userId: string | JwtPayload}, res: Response, next: NextFunction) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized - no token"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET) as JwtPayload

        if (!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized - invalid token"})
        }

        req.userId = decoded.userId

        next()
    } catch (error) {
        console.log("Error: ", error.message)
        return res.status(500).json({ success: false, message: "Server error"})
    }
}