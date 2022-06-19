import { Document, Model, Schema } from 'mongoose'

export interface IUSER {
    signature:{type:string},
    message:{type:string}
}

// Instance methods
export interface IUSERDocument extends IUSER, Document {
    toJSON(): IUSERDocument;
}


// Static methods
export interface IUSERModel extends Model<IUSERDocument> {
    //getByURI(uri: string): Promise<IUSERDocument>
    getUser(signature:string,message:string): Promise<IUSERDocument>
    addUser(signature:string,message:string): Promise<IUSERDocument>
}
