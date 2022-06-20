import { model, Schema } from 'mongoose'
import { CustomDocumentBuild } from '../mongodb/documentDefaults';
import { IWIDGETDocument, IWIDGETModel, IWIDGET } from './interfaces/widget'


export const docWIDGET = {
    blockchains: { type: [String] },
    wallets: { type: [String] },
    background: { type: Schema.Types.Mixed },//color, panel color, modal color
    typography: { type: Schema.Types.Mixed },//font color, secondaary font color, accent font color, font family, font size
    buttons: { type: Schema.Types.Mixed },//color, text color, corner radius
    nft_cards: { type: Schema.Types.Mixed },//background, background bottom, color, card corner radius
    borders: { type: Object },
    icons: { type: Object },
    tooltips: { type: Schema.Types.Mixed },//color, background
    affiliation_settings: { type: Schema.Types.Mixed }
}

export const schema = CustomDocumentBuild(docWIDGET)

schema.statics.addWidget = async function (widgetObj: any) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {

            const widget = await this.findOne({ name: widgetObj.name })
            if (widget) {
                resolve(widget)
            }
            else {

                resolve(await this.create(widgetObj))
            }
        } catch (error) {
            reject(error)
        }
    })
}

schema.statics.getWidget = async function (userName, widgetName) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            const widget = await this.findOne({ name: widgetName })
            if (widget) {
                if (widget.users.indexOf(userName) > -1) {
                    resolve(widget)
                }
                else {
                    resolve("user not allowed to use this widget")
                }
            }
            else {
                resolve("not found such widget")
            }
        } catch (error) {
            reject(error)
        }
    })
}

schema.statics.changeWidget = async function (editorName, widgetName, changesObj) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            const widget = this.findOne({ name: widgetName })

            if (widget) {
                if (widget.editors.indexOf(editorName) > -1) {
                    return await this.findOneAndUpdate({ name: widgetName }, { changesObj })
                }
                else {
                    resolve("not allowed to change widget")
                }
            }
            else {
                resolve("not found widget with that name")
            }
        } catch (error) {
            reject(error)
        }
    })
}

schema.statics.getAllWidgetsOfEditor = async function (widgetId: String) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            const result = await WIDGET.find({ _id:widgetId })
            console.log("result here is: ",result)
            if (result) {
                resolve(result)
            }
            else {
                resolve("no widgets of that editor found")
            }
        } catch (error) {
            reject(error)
        }

    })
}

const WIDGET: IWIDGETModel = model<IWIDGETDocument, IWIDGETModel>('widgets', schema)
export default WIDGET
export {
    IWIDGET,
    IWIDGETModel,
}