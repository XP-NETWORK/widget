import { model, Schema } from 'mongoose'
import { CustomDocumentBuild } from '../mongodb/documentDefaults';
import { IEDITORDocument, IEDITORModel, IEDITOR } from './interfaces/editor'

export const docEDITOR = {
    signature: { type: String },
    message: { type: String }
}

export const schema = CustomDocumentBuild(docEDITOR)
//schema.index({ uri: 1 })
/**
 * MODEL NFT, used for interactions with MongoDB
 */


schema.statics.getEditor = async function (signature: string, message: string) {
    return await new Promise(async (resolve: any, reject: any) => {
        const result = await this.findOne({ signature: signature, message: message })
        if (result)
        {
            resolve(result)
        }
        else{
            resolve("no editor with that signature and message combination")
        }
    })
}


schema.statics.addEditor = async function (signature: String, message: String) {
    return await new Promise(async (resolve: any, reject: any) => {
        let user = await this.findOne({ signature: signature, message: message })
        if (user !== null) {

            resolve("that editor already exists")
        }
        else {

            let newEditor = await this.create({ signature: signature, message: message })
            resolve(newEditor)
        }
    })
}



const EDITOR: IEDITORModel = model<IEDITORDocument, IEDITORModel>('editors', schema)
export default EDITOR
export {
    IEDITOR,
    IEDITORModel,
}