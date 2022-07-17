import express from "express";
import { addUser } from "../controllers/addUser";
import { getUser } from "../controllers/getUser";
import { addWidget } from "../controllers/addWidget";
import { getWidget } from "../controllers/getWidget";
import { verifyUser } from "../middleware/verifyUser";
import { getWidgetsOfEditor } from "../controllers/getWidgetsOfEditor";
import { deleteWidget } from "../controllers/deleteWidget";
// import { validateAndStore } from '../controllers/validateAndStore'
import { updateWidget } from "../controllers/updateWidget";
import { addTransaction } from "../controllers/addTransaction";

import { checkCookies } from "../middleware/checkCookies";

const router = express.Router();

//router.get("/",(req: any,res: any)=>{console.log(req.hello);console.log("world");res.send("prints hello world")})
router.get("/getMyWidget", verifyUser, getWidgetsOfEditor);
router.get("/getUser", getUser);
router.get("/getWidget", getWidget);

router.post("/addUser", addUser);
router.post("/addWidget", addWidget);
router.post("/addTransaction", addTransaction);
// router.post("/validateAndStore", validateAndStore)

router.delete("/deleteWidget", deleteWidget);

router.patch("/updateWidget", checkCookies, updateWidget);

export default router;
