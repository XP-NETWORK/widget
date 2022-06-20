import EDITOR from '../models/editor'
import WIDGET from '../models/widget'
import { getEditor } from './getEditor'

export const getWidgetsOfEditor = async (req: any, res: any) => {

    return await new Promise(async (resolve: any, reject: any) => {

        try {
            if (!req.user) {
                res.send("no user received")
                return
            }

            const { user } = req
            const editor: any = await EDITOR.getEditor(user._id)
            if (editor) {
                const widgets = await WIDGET.getAllWidgetsOfEditor(editor.editorId)
                if (widgets) {
                    return widgets
                }
                else {
                    return "no widgets for that editor"
                }
            }
            else{
                res.send("not authorized to edit")
            }
        } catch (error) {
            res.send(error)
        }

    })

}