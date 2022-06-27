import { Document, Model, Schema } from 'mongoose'

export interface IEDITOR {
    editorId:{type:String},
    widgetId:{type:String}
}

// Instance methods
export interface IEDITORDocument extends IEDITOR, Document {
    toJSON(): IEDITORDocument;
}

// Static methods
export interface IEDITORModel extends Model<IEDITORDocument> {
    //getByURI(uri: string): Promise<IUSERDocument>
    getEditor(editorId:String): Promise<IEDITORDocument>
    addEditor(editorId:String,widgetId:String): Promise<IEDITORDocument>
}
