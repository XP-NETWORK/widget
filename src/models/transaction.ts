import { model, Schema } from 'mongoose'
import { CustomDocumentBuild } from '../mongodb/documentDefaults';
import { ITXDocument, ITXModel, ITX } from './interfaces/transaction'

export const docTX = {
    widgetId:{type:String},
    txHash:{type:String},
    chainId:{type:String}
}

export const schema = CustomDocumentBuild(docTX)
//schema.index({ uri: 1 })
/**
 * MODEL NFT, used for interactions with MongoDB
 */


schema.statics.addTx = async function (widgetId:String,txHash:String,chainId:String){
    return await new Promise(async(resolve: any, reject: any)=>{
        try {
            
        let tx = await this.findOne({txHash:txHash,chainId:chainId})
        console.log(tx)
        if(tx !== null)
        {
            console.log("in 1");
            
            resolve(tx)
        }
        else{
            console.log("in 2");
            resolve(this.create({widgetId:widgetId,txHash:txHash,chainId:chainId}))
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