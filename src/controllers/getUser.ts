import USER from "../models/user"

export const getUser = async (req: any, res: any) => {
    try {
        if (!req.query.address || !req.query.signature) {
            res.status(400).send("siri: signature or address were not sent")
            return
        }
        const { address, signature } = req.query
        const user = await USER.getUser(signature, address)

        res.status(200).json(user)
        return
    } catch (error: any) {
        res.status(500).json({ message: error.toString() });
    }
}