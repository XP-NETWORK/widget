import { Document, Model, Schema } from 'mongoose'

export interface ITX {
    widgetId: { type: String },
    txHash: { type: String },
    fromChain: { type: String },
    toCahin: { type: String },
    fees: { type: String }
}

// Instance methods
export interface ITXDocument extends ITX, Document {
    toJSON(): ITXDocument;
}

// Static methods
export interface ITXModel extends Model<ITXDocument> {
    //getByURI(uri: string): Promise<IUSERDocument>
    getEditor(editorId: String): Promise<ITXDocument>
    addTx(widgetId: String, txHash: String, fromChain: String, toCahin: String, fees: String): Promise<ITXDocument | string>
}
