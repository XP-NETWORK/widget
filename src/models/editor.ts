import { model, Schema } from 'mongoose'
import { CustomDocumentBuild } from '../mongodb/documentDefaults';
import { IEDITORDocument, IEDITORModel, IEDITOR } from './interfaces/editor'

export const docEDITOR = {
    editorId:{type:String},
    widgetId:{type:String}
}

export const schema = CustomDocumentBuild(docEDITOR)
//schema.index({ uri: 1 })
/**
 * MODEL NFT, used for interactions with MongoDB
 */


schema.statics.getEditor = async function (editorId:String) {
    return await new Promise(async (resolve: any, reject: any) => {
        const result = await this.findOne({ editorId: editorId })
        if (result)
        {
            resolve(result)
        }
        else{
            resolve("no editor with that signature and message combination")
        }
    })
}


schema.statics.addEditor = async function (editorId:String,widgetId:String) {
    return await new Promise(async (resolve: any, reject: any) => {
        let user = await this.findOne({ widgetId: widgetId })
        if (user !== null) {

            resolve("that editor already exists")
        }
        else {

            let newEditor = await this.create({ editorId:editorId,widgetId:widgetId })
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