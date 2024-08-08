import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    res.send("Register controller")
}

export const login = async (req: Request, res: Response) => {
    res.send("Login controller")
}

export const logout = async (req: Request, res: Response) => {
    res.send("Logout controller")
}