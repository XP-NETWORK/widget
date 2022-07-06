import USER  from "../models/user"

export const getUser = async(req:any,res:any)=>{
    try {
            res.status(400).send("siri: signature or address were not sent")
            return
        }
        res.status(200).json(user)
        return
        res.status(500).json({ message: error.toString() });
    }
    
}