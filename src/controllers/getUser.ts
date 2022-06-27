import USER  from "../models/user"

export const getUser = async(req:any,res:any)=>{
    try {
        if(!req.query.address||!req.query.signature)
        {
            res.send("signature or address were not sent")
            return
        }
        const {address,signature} = req.query
        const user = await USER.getUser(signature,address)
        res.send(user)
        return
    } catch (error) {
        res.send(error)
    }
    
}