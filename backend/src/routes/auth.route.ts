import { login, logout, register } from "../controllers/auth.controller"
import express from "express"

const router = express.Router()

router.post("/register", register)

router.get("/login", login)

router.get("/logout", logout)

export default router