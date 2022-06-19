import { Document, Model, Schema } from 'mongoose'

export interface IWIDGET{
    name:{type:String},
    users:{type:[String]},
    editor:{type:String},
    blockchains:{type:[String]},
    wallets:{type:[String]},
    background:{type:Schema.Types.Mixed},//color, panel color, modal color
    typography:{type:Schema.Types.Mixed},//font color, secondary font color, accent font color, font family, font size
    buttons: {type:Schema.Types.Mixed},//color, text color, corner radius
    nft_cards:{type:Schema.Types.Mixed},//background, background bottom, color, card corner radius
    borders:{type:String},
    icons:{type:String},
    tooltips: {type:Schema.Types.Mixed},//color, background
    affiliation_settings: {type:Schema.Types.Mixed}
}

export interface IWIDGETDocument extends IWIDGET, Document {
    toJSON(): IWIDGETDocument;
}

export interface IWIDGETModel extends Model<IWIDGETDocument> {    
    addWidget(widgetObj:any): Promise<IWIDGETDocument>
    getWidget(userName:string, widgetName: string): Promise<IWIDGETDocument>
}