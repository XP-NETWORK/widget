import express from 'express'
import {newUser} from '../controllers/newUser'

const router = express.Router()

router.get("/",(req,res)=>{console.log("hey");res.send("hey")})
router.post("/newUser",newUser)


export default router