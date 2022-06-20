import USER from "../models/user"

export const verifyUser = async (req: any, res: any,next: any)=>{
    if(!req.query.signature||!req.query.address)
    {
        res.send("no signature or address sent")
        return
    }

    const {signature,address} = req.query
    const user = await USER.getUser(signature,address)

    if(user)
    {
        req.user = user
        next()
    }
    else{
        res.send("no such user")
        return
    }
}