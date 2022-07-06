import USER from "../models/user"

//a function to add user (signature and message) to the DB
export const addUser = async (req: any, res: any) => {
    try {
        if (!req.body.signature || !req.body.address) {
            res.status(404).send("siri: signature or message not sent")
            return
        }
        const { signature, address } = req.body
        const result = await USER.addUser(signature, address)
        if (result === "user already exists") {
            res.status(405).send(result)
        }
        else {
            res.status(200).send(result)
        }
    } catch (e: any) {
        res.status(500).json({ message: e.toString() });
    }
}