import { login, logout, register } from "../controllers/auth.controller"
import express, { Request, Response } from "express"

const router = express.Router()

router.get("/register", register)

router.get("/login", login)

router.get("/logout", logout)

export default router