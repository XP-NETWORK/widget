import TX from "../models/transaction"

//a function to add user (signature and message) to the DB
export const addTransaction = async (req: any, res: any) => {
    try {
        if (!req.body.widgetId || !req.body.txHash || !req.body.fromChain|| !req.body.toCahin|| !req.body.fees) {
            res.status(404).send("siri: you are missing information")
            return
        }
        console.log(req.body)
        const { widgetId,txHash, fromChain,toCahin,fees } = req.body
        const result = await TX.addTx(widgetId,txHash, fromChain,toCahin,fees )
        if (result === "transaction exist") {
            res.status(405).send(result)
        }
        else {
            res.status(200).send(result)
        }
    } catch (e: any) {
        res.status(500).json({ message: e.toString() });
    }
}