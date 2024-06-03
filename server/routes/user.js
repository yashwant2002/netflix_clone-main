import { Router } from "express";
import { addToLikedMovies, deleteMovie, getLikedMovies, loginUser, signupUser, verifyUser } from "../controllers/user.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY

const router = Router();


const verify = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.json({ error: "Token missing" });
        } else {
            jwt.verify(token, SECRET_KEY, (err) => {
                if (err) {
                    return res.json({ error: "Error in token", message: err })
                } else {
                    next()
                }
            })
        }
    } catch (error) {
        res.json(error, 'error while verifying the user')
    }
}

router.post("/signup", signupUser)
router.post("/login", loginUser)
router.get("/verify", verify, verifyUser)
router.post("/add", addToLikedMovies)
router.get("/getMovies/:email", getLikedMovies)
router.put("/delete", deleteMovie)

export default router;