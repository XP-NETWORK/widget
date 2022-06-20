import express from 'express'
import {addUser} from '../controllers/addUser'
import {getUser} from '../controllers/getUser'
import {addWidget} from '../controllers/addWidget'
import { getWidget } from '../controllers/getWidget'
import { testMid } from '../middleware/verifyUser'
import { getWidgetsOfEditor } from '../controllers/getWidgetsOfEditor'

const router = express.Router()

router.get("/",testMid,(req: any,res: any)=>{console.log(req.hello);console.log("world");res.send("prints hello world")})
router.get("/getMyWidget",verifyUser,getWidgetsOfEditor)
router.get("/getUser",getUser)
router.get("/getWidget",getWidget)

router.post("/addUser",addUser)
router.post("/addWidget",addWidget)


export default router