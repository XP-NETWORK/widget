import express from 'express'
import {addUser} from '../controllers/addUser'
import {getUser} from '../controllers/getUser'
import {addWidget} from '../controllers/addWidget'
import { getWidget } from '../controllers/getWidget'

const router = express.Router()

router.get("/",(req,res)=>{console.log("hey");res.send("hey")})
router.get("/getUser",getUser)
router.get("/getWidget",getWidget)

router.post("/addUser",addUser)
router.post("/addWidget",addWidget)


export default router