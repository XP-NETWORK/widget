import EDITOR from '../models/editor'
import WIDGET from '../models/widget'
import { getEditor } from './getEditor'

export const getWidgetsOfEditor = async (req: any, res: any) => {

        try {
            if (!req.user) {
                res.send("no user received")
                return
            }
            const _user = req.user
            const _editor: any = await EDITOR.getEditor(_user._id)
            if (_editor) {
                const _widgets: any = await WIDGET.getAllWidgetsOfEditor(_editor.widgetId)
                if (_widgets) {
                    const myWidgets = _widgets.filter((widget:any)=>{
                        if(!widget.isDeleted)
                        return widget
                     })
                    res.send(myWidgets)
                    return
                }
                else {
                    res.send("no widgets for that editor")
                }
            }
            else{
                res.send("not authorized to edit")
            }
        } catch (error) {
            res.send(error)
        }
}