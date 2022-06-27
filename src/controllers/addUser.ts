import USER from "../models/user"

//a function to add user (signature and message) to the DB
export const addUser = async (req: any, res: any) => {
    try {
        if (!req.body.signature || !req.body.address) {
            res.send("signature or message not sent")
            return
        }
        const { signature, address } = req.body
        const result = await USER.addUser(signature, address)
        console.log(result)
        if (result) {
            res.send(result)
        }
        else {
            res.send("problem with adding a user or receiving existing one")
        }
    } catch (e) {
        res.send("error location 1: " + e)
    }
}