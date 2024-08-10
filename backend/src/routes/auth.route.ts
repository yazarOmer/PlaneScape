import { verifyToken } from "../middlewares/verifyToken"
import { checkAuth, login, logout, register } from "../controllers/auth.controller"
import express from "express"

const router = express.Router()

router.get("/check-auth", verifyToken, checkAuth)
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router