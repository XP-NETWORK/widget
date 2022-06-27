import { model, Schema } from 'mongoose'
// import { CustomDocumentBuild } from '../../utils/mongodb/documentDefaults'
import { CustomDocumentBuild } from '../mongodb/documentDefaults';
import { IUSERDocument, IUSERModel, IUSER } from './interfaces/user'
//import { sendNewNFTCachedMessage, sendNFTexistsMessage } from '../helpers/telegram'

export const docUSER = {
    signature: { type: String },
    address: { type: String }
}

export const schema = CustomDocumentBuild(docUSER)
//schema.index({ uri: 1 })
/**
 * MODEL NFT, used for interactions with MongoDB
 */


schema.statics.getUser = async function (signature: string, address: string) {
    return await new Promise(async (resolve: any, reject: any) => {
        const result = await this.findOne({ signature: signature, address: address })
        if (result)
        {
            resolve(result)
        }
        else{
            resolve("no user with that signature and message combination")
        }
    })
}

schema.statics.getUserById = async function (userId: String){
    return await new Promise( async (resolve: any, reject: any)=>{

        try {
            if(!userId)
        {
            reject("userId not sent")
        }
        const user = await USER.findById(userId)
        if(user)
        {
            resolve(user)
        }
        else{
            resolve(-1)
        }

        } catch (error) {
            reject(error)
        }
    })
}

schema.statics.addUser = async function (signature: String, address: String) {
    return await new Promise(async (resolve: any, reject: any) => {
        let user = await this.findOne({ signature: signature, address: address })
        if (user !== null) {

            resolve(user)
        }
        else {

            let newUser = await this.create({ signature: signature, address: address })
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