import TX from '../models/transaction'
import axios from 'axios'
import { config } from 'dotenv'

config()
export const validateAndStore = async (req: any, res: any) => {
    //get widget ID and transaction hash
    try {
        if (!req.body.widgetId || !req.body.txHash || !req.body.chainId) {
            res.send("widgetId or txHash or chainNonce not sent ")
            return
        }

        const { widgetId, txHash, chainId } = req.body
        const urlStr: string = process.env.explorerURL || ""

        await axios.get(urlStr + `fromHash=${txHash}&fromChain=${chainId}`)
            .then(async (data) => {
                if ((data.data.events[0]).status === "Completed") {

                    const result = await TX.addTx(widgetId, txHash, chainId)


                    if (result) {
                        res.send(result)
                        return
                    }
                    else {
                        res.send("did not save Tx")
                        return
                    }
                }
            })
            .catch((err) => {
                res.send(err)
                return
            })



    } catch (error) {
        res.send(error)
        return
    }

}