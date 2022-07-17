import { model, Schema } from 'mongoose'
import { CustomDocumentBuild } from '../mongodb/documentDefaults';
import { ITXDocument, ITXModel, ITX } from './interfaces/transaction'

export const docTX = {
    widgetId: { type: String },
    txHash: { type: String },
    fromChain: { type: String },
    toCahin: { type: String },
    fees: { type: String },
    extraFees: { type: Number }
}

export const schema = CustomDocumentBuild(docTX)

schema.statics.addTx = async function (widgetId: String, txHash: String, fromChain: String, toCahin: String, fees: String, extraFees: number) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            let tx = await this.findOne({ txHash })
            console.log(tx)
            if (tx !== null) {
                console.log("in 1");
                resolve("transaction exist")
            }
            else {
                console.log("in 2");
                resolve(this.create({ widgetId, txHash, fromChain, toCahin, fees, extraFees }))
            }
        } catch (error) {
            reject(error)
        }
    })
}

const TX: ITXModel = model<ITXDocument, ITXModel>('transactions', schema)
export default TX
export {
    ITX,
    ITXModel,
}