import USER  from "../models/user"



export const  getUser = async(req:any,res:any)=>{
    try {
        if(!req.query.message||!req.query.signature)
        {
            res.send("signature or message were not sent")
            return
        }
        const {message,signature} = req.query
        const user = await USER.getUser(signature,message)
        res.send(user)
        return
    } catch (error) {
        res.send(error)
    }
    
}