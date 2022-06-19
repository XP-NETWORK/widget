import { model, Schema } from 'mongoose'
// import { CustomDocumentBuild } from '../../utils/mongodb/documentDefaults'
import { CustomDocumentBuild } from '../mongodb/documentDefaults';
import { IUSERDocument, IUSERModel, IUSER } from './interfaces/user'
//import { sendNewNFTCachedMessage, sendNFTexistsMessage } from '../helpers/telegram'

export const docUSER = {
    signature: { type: String },
    message: { type: String }
}

export const schema = CustomDocumentBuild(docUSER)
//schema.index({ uri: 1 })
/**
 * MODEL NFT, used for interactions with MongoDB
 */


schema.statics.getUser = async function (signature: string, message: string) {
    return await new Promise(async (resolve: any, reject: any) => {
        const result = await this.findOne({ signature: signature, message: message })
        if (result)
        {
            resolve("that user already exist")
        }
        else{
            resolve("no user with that signature and message combination")
        }
    })
}


schema.statics.addUser = async function (signature: String, message: String) {
    return await new Promise(async (resolve: any, reject: any) => {
        let user = await this.findOne({ signature: signature, message: message })
        if (user !== null) {

            resolve(user)
        }
        else {

            let newUser = await this.create({ signature: signature, message: message })
            resolve(newUser)
        }
    })
}



const USER: IUSERModel = model<IUSERDocument, IUSERModel>('users', schema)
export default USER
export {
    IUSER,
    IUSERModel,
}