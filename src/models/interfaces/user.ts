import { Document, Model, Schema } from 'mongoose'

export interface IUSER {
    signature: { type: string },
    address: { type: string }
    widgets: { type: {} }
}

// Instance methods
export interface IUSERDocument extends IUSER, Document {
    toJSON(): IUSERDocument;
}

// Static methods
export interface IUSERModel extends Model<IUSERDocument> {
    //getByURI(uri: string): Promise<IUSERDocument>
    getUser(signature: string, address: string): Promise<IUSERDocument>
    getUserById(userId: string): Promise<any>
    addUser(signature: string, address: string): Promise<IUSERDocument>
    updateUserWidgetList(address:string , widgetId:string):any
}
