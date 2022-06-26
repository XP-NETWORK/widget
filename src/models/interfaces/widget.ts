import { ObjectId } from 'mongodb';
import { Document, Model, Schema } from 'mongoose'

export interface IWIDGET{
    blockchains:{type:[String]},
    wallets:{type:[String]},
    background:{type:Schema.Types.Mixed},//color, panel color, modal color
    typography:{type:Schema.Types.Mixed},//font color, secondary font color, accent font color, font family, font size
    buttons: {type:Schema.Types.Mixed},//color, text color, corner radius
    nft_cards:{type:Schema.Types.Mixed},//background, background bottom, color, card corner radius
    borders:{type:String},
    icons:{type:String},
    tooltips: {type:Schema.Types.Mixed},//color, background
    affiliation_settings: {type:Schema.Types.Mixed},
    isDeleted: {type: Boolean,default:false}
}

export interface IWIDGETDocument extends IWIDGET, Document {
    toJSON(): IWIDGETDocument;
}

export interface IWIDGETModel extends Model<IWIDGETDocument> {    
    addWidget(widgetObj:any): Promise<IWIDGETDocument>
    getWidget( widgetId: string): Promise<IWIDGETDocument>
    getAllWidgetsOfEditor(editorId:String): Promise<IWIDGETDocument>
    deleteWidget(widgetId:String): Promise<String>
}