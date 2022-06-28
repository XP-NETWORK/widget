import { ObjectId } from 'mongodb';
import { ConnectionStates, model, Schema } from 'mongoose'
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
    affiliation_settings: { type: Schema.Types.Mixed },
    isDeleted: { type: Boolean, default: false }
}

export const schema = CustomDocumentBuild(docWIDGET)

schema.statics.addWidget = async function (widgetObj: any) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            // const widget = await this.findOne({ name: widgetObj.name })
            // if (widget) {
            //     console.log("got here")
            //     resolve(widget)
            // }
            // else {
            resolve(await this.create(widgetObj))
            // }
        } catch (error) {
            reject(error)
        }
    })
}

schema.statics.getWidget = async function (widgetId) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            const widget = await this.findOne({ _id: widgetId })
            if (widget) {
                resolve(widget)
            }
            else {
                resolve("not found such widget")
            }
        } catch (error) {
            reject(error)
        }
    })
}

schema.statics.updateWidget = async function (newWidget, widgetId,) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            const oldWidget = await this.findOne({ _id: widgetId })
            let updatedWidget;
            if (oldWidget) {
                updatedWidget = await this.findOneAndUpdate({ _id: widgetId }, newWidget)
            }
            else {
                updatedWidget = "not found widget with that name"
            }
            resolve(updatedWidget)
        } catch (error) {
            reject(error)
        }
    })
}

schema.statics.getAllWidgetsOfEditor = async function (widgetId: String) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            const result = await WIDGET.find({ _id: widgetId, isDeleted: false })
            console.log("result here is: ", result)
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

schema.statics.deleteWidget = async function (widgetId: String) {
    return await new Promise(async (resolve: any, reject: any) => {
        try {
            const widget = await WIDGET.findOne({ _id: widgetId })
            console.log(widget)
            if (widget) {
                await WIDGET.findByIdAndUpdate(widgetId, { isDeleted: true })
                resolve("deleted successfully")
            }
            else {
                resolve("didn't find widget with that id")
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