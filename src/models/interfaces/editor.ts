import { Document, Model, Schema } from 'mongoose'

export interface IEDITOR {
    signature:{type:string},
    message:{type:string}
}

// Instance methods
export interface IEDITORDocument extends IEDITOR, Document {
    toJSON(): IEDITORDocument;
}


// Static methods
export interface IEDITORModel extends Model<IEDITORDocument> {
    //getByURI(uri: string): Promise<IUSERDocument>
    getEditor(signature:string,message:string): Promise<IEDITORDocument>
    addEditor(signature:string,message:string): Promise<IEDITORDocument>
}
